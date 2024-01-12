from flask import Flask, request, jsonify, make_response
from langchain.chat_models import ChatOpenAI
from langchain.prompts.chat import (
    ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate, MessagesPlaceholder
)
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from dotenv import load_dotenv
import uuid
from flask_cors import CORS

# Load environment variables
load_dotenv()

# Initialize ChatOpenAI
chat = ChatOpenAI(temperature=0)

# Set up the prompt template for the chat
prompt_template = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template("you are a programmer, speak only in programming languages and tools"),
    MessagesPlaceholder(variable_name="history"),
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
        memory = ConversationBufferMemory(return_messages=True)
        session_conversations[session_token] = memory
    else:
        # Retrieve the specific conversation memory for the returning user
        memory = session_conversations.get(session_token, ConversationBufferMemory(return_messages=True))

    # Extract message from request
    data = request.json
    input_text = data.get("message")

    # Initialize ConversationChain using ChatOpenAI and specific memory
    conversation = ConversationChain(memory=memory, prompt=prompt_template, llm=chat)
    response_text = conversation.predict(input=input_text)

    # Create response object
    response = make_response(jsonify({"response": response_text}))

    # Set the session token as a cookie in the response
    response.set_cookie('session_token', session_token, max_age=86400)  # 1 day expiration

    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
