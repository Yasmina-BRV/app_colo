export default function viewListMessages(messages) {
  function formatTimestamp(timestamp) {
    if (timestamp instanceof Date) {
      return timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    }
    return timestamp;
  }
  return `
    <div class="messages-container">
      ${messages.map((msg) => `
        <div class="${msg.sender === 'Utilisateur' ? 'user-message' : 'bot-message'}">
          <p>${msg.text}</p>
          <small>${msg.sender} - ${formatTimestamp(msg.timestamp)}</small>
        </div>
      `).join('')}
    </div>
  `;
}
