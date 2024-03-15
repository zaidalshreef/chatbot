from flask import Flask, request, jsonify, make_response
from langchain_google_genai import GoogleGenerativeAI
# from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate, MessagesPlaceholder
)
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from dotenv import load_dotenv
import uuid
from flask_cors import CORS
from langchain_community.llms import HuggingFaceHub
from langchain_community.chat_models.huggingface import ChatHuggingFace
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from langchain.llms.huggingface_pipeline import HuggingFacePipeline
from os.path import expanduser
from langchain_experimental.chat_models import Llama2Chat
from langchain_community.llms import LlamaCpp
from langchain.chains import LLMChain
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.schema import SystemMessage
from langchain_community.llms.huggingface_pipeline import HuggingFacePipeline
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

# Load environment variables
load_dotenv()


model_path = expanduser("/home/zaid/chatbot/Models/llama-2-7b-chat.Q4_0.gguf")

llm = LlamaCpp(
    model_path=model_path,
    callback_manager=CallbackManager([StreamingStdOutCallbackHandler()]),
    verbose=True,
)

chat_model = Llama2Chat(llm=llm)


# Set up the prompt template for the chat
prompt_template = ChatPromptTemplate.from_messages([
    SystemMessage(
        content="you are a career mentor helping students and fresh grads with their career advice. Respond with helpful guidance."),
    MessagesPlaceholder(variable_name="chat_history"),
    HumanMessagePromptTemplate.from_template("{input}")
])

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Dictionary to store ConversationBufferMemory instances for each session
session_conversations = {}


@app.route('/chat', methods=['POST'])
def chatbot_response():
    session_token = request.cookies.get('session_token')

    if not session_token:
        # Generate a new session token for a new user
        session_token = str(uuid.uuid4())
        memory = ConversationBufferMemory(
            memory_key="chat_history", return_messages=True)
        session_conversations[session_token] = memory
    else:
        # Retrieve the specific conversation memory for the returning user
        memory = session_conversations.get(session_token, ConversationBufferMemory(
            memory_key="chat_history", return_messages=True))

    # Extract message from request
    data = request.json
    input_text = data.get("message")

    # Initialize ConversationChain using the HuggingFacePipeline and specific memory
    conversation = ConversationChain(
        memory=memory, prompt=prompt_template, llm=chat_model)
    response_text = conversation.predict(input=input_text)

    # Create response object
    response = make_response(jsonify({"response": response_text}))

    # Set the session token as a cookie in the response
    response.set_cookie('session_token', session_token,
                        max_age=86400)  # 1 day expiration

    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
