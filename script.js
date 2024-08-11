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

        
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container';

        
        const message = document.createElement('div');
        message.className = 'message blue';
        message.textContent = messageText;

        
        const timestamp = document.createElement('div');
        timestamp.className = 'timestamp';
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
        timestamp.textContent = timeString;

        
        messageContainer.appendChild(message);
        messageContainer.appendChild(timestamp);

        
        chatBox.appendChild(messageContainer);

        
        input.value = '';

         
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
