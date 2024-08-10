document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value;

    if (messageText.trim() !== "") {
        const chatBox = document.querySelector('.chat-box');

        // Create the parent message container
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        // Create the message element
        const message = document.createElement('div');
        message.className = 'message blue';
        message.textContent = messageText;

        // Create the timestamp element
        const timestamp = document.createElement('div');
        timestamp.className = 'timestamp';
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
        timestamp.textContent = timeString;

        // Append the message and timestamp to the message container
        messageContainer.appendChild(message);
        messageContainer.appendChild(timestamp);

        // Append the message container to the chat box
        chatBox.appendChild(messageContainer);

        // Clear the input field
        input.value = '';

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
