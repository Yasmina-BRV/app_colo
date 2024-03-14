export default () => (`
  <div class="chat-container">
    <div class="chat-message bot-message">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833a.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.a
        // Le reste du SVG a été tronqué pour des raisons de lisibilité
      </svg>
      <div class="message-content">
        <h5 class="card-title">Bot</h5>
        <p class="card-text"><small class="text-muted">02-13-2024 3pm</small></p>
        <p class="card-text">How can I assist you today?</p>
      </div>
    </div>
    <div class="chat-message user-message">
      <div class="message-content">
        <h5 class="card-title">Me</h5>
        <p class="card-text"><small class="text-muted">02-13-2024 3:05pm</small></p>
        <p class="card-text">Hello! I have a question.</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 
        // Le reste du SVG a été tronqué pour des raisons de lisibilité
      </svg>
    </div>
  </div>
`);
