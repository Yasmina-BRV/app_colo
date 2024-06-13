import viewNav from '../views/nav';
import viewFooter from '../views/footer';

import viewTasks from '../views/colloc/tasks';

const Tasks = class {
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
      </div>
      <div class="row">
        <div class="col-12">${viewTasks()}</div>
      </div>
      <div class="row">
        <div class="col-12">${viewFooter()}</div>
      </div>
    `;
  }

  async run() {
    this.el.innerHTML = this.render();
  }
};

export default Tasks;
