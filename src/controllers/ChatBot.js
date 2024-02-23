import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import viewListMessages from '../views/chatbot/list-messages';
import viewInput from '../views/chatbot/input';

const ChatBot = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
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
              ${viewListMessages()}
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
    this.el.innerHTML = this.render();
  }
};

export default ChatBot;
