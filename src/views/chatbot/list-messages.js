import viewBotMessage from './bot-message';
import viewUserMessage from './user-message';

export default (messages) => (`
  <div class="row">
    ${messages.map((message) => (message.type === 'bot' ? viewBotMessage(message) : viewUserMessage(message))).join('')}
  </div>
`);
