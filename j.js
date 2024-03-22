document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('input-message');
    const messagesList = document.getElementById('messages');
  
    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = messageInput.value.trim();
      if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
      }
    });
  
    socket.on('chat message', (msg) => {
      const li = document.createElement('li');
      li.textContent = msg;
      messagesList.appendChild(li);
      messagesList.scrollTop = messagesList.scrollHeight;
    });
});