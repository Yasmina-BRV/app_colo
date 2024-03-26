import axios from 'axios';

import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import viewListMessages from '../views/chatbot/list-messages';
import viewInput from '../views/chatbot/input';
import Bot from './Bot';

class ChatBot {
  constructor() {
    this.el = document.querySelector('#root');
<<<<<<< HEAD
    this.params = params;
    this.data = [];
=======
    this.bots = [new Bot('Aurora Assistant')];
    this.messages = [];
    this.init();
  }
>>>>>>> origin/yasmina

  init() {
    this.render();
    this.initEventListeners();
    setTimeout(() => {
      this.addBotMessage(this.bots[0].name, "Bonjour, je suis l'assistant Aurora. En quoi puis-je vous aider ?");
    }, 1000);
  }

<<<<<<< HEAD
  render(data) {
    const { messages } = data;
    return `
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="row">
          <div class="col-3">
            ${viewListBots()}
          </div>
          <div class="col-9">
            <div class="row">
              ${viewListMessages(messages)}
            </div>
            <div class="row">
              ${viewInput()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  run() {
    axios
      .get('http://localhost/messages')
      .then((response) => {
        this.el.innerHTML = this.render({
          messages: response.data
        });
      });
=======
  render() {
    this.el.innerHTML = `
            <div class="container-fluid">
                ${viewNav()}
                <div class="row">
                    <div class="col-3">${viewListBots(this.bots)}</div>
                    <div class="col-9">
                        <div class="messages-container">${viewListMessages(this.messages)}</div>
                        ${viewInput()}
                    </div>
                </div>
            </div>`;
    this.scrollToLatestMessage();
  }

  initEventListeners() {
    const input = this.el.querySelector('input[type="text"]');
    const button = this.el.querySelector('button#button-addon');
    button.addEventListener('click', () => {
      this.handleSendMessage(input.value);
    });
    input.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.handleSendMessage(input.value);
        input.value = '';
      }
    });
>>>>>>> origin/yasmina
  }

  handleSendMessage(text) {
    this.addUserMessage('Utilisateur', text);
    this.messages = [];
    switch (text.toLowerCase()) {
      case 'weather':
        this.bots[0].fetchWeatherInfo().then((response) => {
          this.addBotMessage(this.bots[0].name, response);
        });
        break;
      case 'help':
        this.handleHelpCommand();
        break;
      case 'greet':
        this.addBotMessage(this.bots[0].name, 'Bonjour ! Comment puis-je vous aider ?');
        break;
      default:
        this.bots.forEach((bot) => {
          bot.respondTo(text).then((response) => {
            this.addBotMessage(bot.name, response);
            setTimeout(() => {
              this.scrollToLatestMessage();
            }, 100);
          });
        });
        break;
    }
  }

  handleHelpCommand() {
    const availableCommands = this.bots[0].getAvailableCommands();
    this.addBotMessage(this.bots[0].name, `Commandes disponibles: ${availableCommands}`);
  }

  addUserMessage(sender, text) {
    const timestamp = new Date();
    this.addMessage(sender, text, timestamp);
    this.render();
  }

  addBotMessage(sender, text) {
    const timestamp = new Date();
    this.addMessage(sender, text, timestamp);
    this.render();
  }

  addMessage(sender, text, timestamp) {
    this.messages.push({ sender, text, timestamp });
    localStorage.setItem('chatbotMessages', JSON.stringify(this.messages));
  }

  scrollToLatestMessage() {
    const messagesContainer = this.el.querySelector('.messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}
export default ChatBot;
