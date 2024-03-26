import viewBotMessage from './bot-message';
import viewUserMessage from './user-message';

export default (messages) => (`
  <div class="row">
    ${messages.map((user) => viewBotMessage(user)).join('')}
  </div>
  <div class="row">
    ${messages.map((user) => viewUserMessage(user)).join('')}
  </div>
`);
