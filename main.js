 let isLoading = false;

      // Function to send a message to the chatbot and get a response
      async function sendMessageToChatbot(message) {
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

      // Function to handle the form submission
      async function handleFormSubmit(event) {
        event.preventDefault();

        // Check if already loading
        if (isLoading) return;

        const inputField = document.getElementById("chatbotInput");
        const message = inputField.value;

        // Check if the input is empty
        if (message === "") return;

        // Set loading state to true
        isLoading = true;

        // Disable the input and button during loading
        inputField.disabled = true;
        document.getElementById("sendButton").disabled = true;

        displayMessage(message, "user");
        inputField.value = ""; // Clear the input field

        // Display loading message
        const loadingMessage = "Loading...";
        displayMessage(loadingMessage, "bot");

        try {
          const response = await sendMessageToChatbot(message);
          // Replace the loading message with the actual response
          replaceMessage(loadingMessage, response.response);
        } catch (error) {
          console.error("Error fetching response:", error);
          // Handle the error appropriately, e.g., display an error message to the user
        } finally {
          // Reset loading state and enable the input and button
          isLoading = false;
          inputField.disabled = false;
          document.getElementById("sendButton").disabled = false;
        }
      }
      // Function to display a message in the chat interface
      function displayMessage(message, sender) {
        const messagesContainer = document.getElementById("messagesContainer");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(
          "flex",
          sender === "user" ? "justify-end" : "justify-start",
        );
        const messageBubble = document.createElement("div");
        messageBubble.classList.add(
          "rounded-2xl",
          "py-2",
          "px-4",
          "max-w-md",
          "lg:max-w-xl",
          sender === "user" ? "bg-purple-500" : "bg-gray-700",
        );
        // Convert Markdown to HTML if sender is not the user
        if (sender !== "user") {
          messageBubble.innerHTML = marked.parse(message);
        } else {
            messageBubble.textContent = message;
        }
        messageDiv.appendChild(messageBubble);
        messagesContainer.appendChild(messageDiv);
      }
      function replaceMessage(loadingMessage, actualMessage) {
        const messagesContainer = document.getElementById("messagesContainer");
        const loadingMessageDiv = messagesContainer.lastChild;
        // Create a new div for the actual message
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("flex", "justify-start");
        const messageBubble = document.createElement("div");
        messageBubble.classList.add(
          "rounded-lg",
          "py-2",
          "px-4",
          "max-w-md",
          "lg:max-w-md",
          "bg-gray-700",
        );
        // Convert Markdown to HTML for the actual message
        messageBubble.innerHTML = marked.parse(actualMessage);
        messageDiv.appendChild(messageBubble);

        // Replace the loading message with the actual message
        messagesContainer.replaceChild(messageDiv, loadingMessageDiv);
      }

      document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("chatbotForm");
        form.addEventListener("submit", handleFormSubmit);
      });