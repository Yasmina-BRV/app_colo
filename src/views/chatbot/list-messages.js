import viewBotMessage from './bot-message';
import viewUserMessage from './user-message';

export default () => (`
  <ul>
    ${viewBotMessage()}
    ${viewUserMessage()}
  </ul>
`);
