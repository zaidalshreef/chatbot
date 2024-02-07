
// is the chatbot currently loading a response 
let isLoading = false;


// The function takes in one parameter: message (the message you want to send to the chatbot)
async function sendMessageToChatbot(message) {

  // Send a POST request to the chatbot API with your message as the payload 
  const response = await fetch(
    "http://127.0.0.1:5000/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    },
  );
  return await response.json();
}


// Function to display a message in the chat interface
function displayMessage(message, sender) {
  const messageDiv = `
   <div class="flex justify-${sender === "user" ? "end" : "start"}">
    <div class=" bg-${sender === "user" ? "purple-500" : "gray-700"} rounded-2xl py-2 px-4 max-w-md lg:max-w-xl">
  ${sender === "user" ? messageBubble.textContent = message : messageBubble.innerHTML = marked.parse(message)}
    </div>
  </div>`

  document.getElementById("messagesContainer").appendChild(messageDiv);
}



// Function to handle the form submission 
async function handleFormSubmit(event) {
  event.preventDefault();

  // Check if already loading
  if (isLoading) return;

  const message = document.getElementById("chatbotInput").value;

  // do not send empty messages
  if (message === "") return;

  // Set loading state to true
  isLoading = true;

  // Disable the input and button during loading
  inputField.disabled = true;
  document.getElementById("sendButton").disabled = true;

  displayMessage(message, "user");
  inputField.value = ""; // Clear the input field

  // Display loading message
  document.getElementById("loadingMessage").style.display = "block";

  try {
    const response = await sendMessageToChatbot(message);
    // Replace the loading message with the actual response
    displayMessage(response.response, "chatbot");
  } catch (error) {
    console.error("Error fetching response:", error);
    // Handle the error appropriately, e.g., display an error message to the user
  } finally {
    // Reset loading state and enable the input and button
    isLoading = false;
    inputField.disabled = false;
    document.getElementById("loadingMessage").style.display = "none";
    document.getElementById("sendButton").disabled = false;
  }
}

// Add an event listener to the form to handle form submissions
document.querySelector("#chatForm").addEventListener("submit", handleFormSubmit);
