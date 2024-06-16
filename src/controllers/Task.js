import axios from 'axios';
import Cookies from 'js-cookie';

import viewNav from '../views/nav';
import viewFooter from '../views/footer';

import viewTask from '../views/colloc/task';
import viewTaskTable from '../views/colloc/taskTable';

const Task = class {
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
        <div class="col-12">${viewTask()}</div>
      </div>
      <div class="row">
        <div class="col-12">${viewFooter()}</div>
      </div>
    `;
  }

  async getTasks() {
    try {
      const response = await axios.get('http://localhost:80/tasks');
      return response.data;
    } catch {
      return false;
    }
  }

  async tasks() {
    const table = document.querySelector('tbody');
    const datas = await this.getTasks();
    datas.forEach((data) => {
      table.insertAdjacentHTML('beforeend', viewTaskTable(data));
    });
  }

  async run() {
    this.el.innerHTML = this.render();

    await this.tasks();

    const createTaskButton = this.el.querySelector('.createTaskButton');

    createTaskButton.addEventListener('click', () => {
      const validationCategory01 = this.el.querySelector('#validationCategory01').value;
      const inputHead01 = this.el.querySelector('#inputHead01').value;
      const inputDescription01 = this.el.querySelector('#inputDescription01').value;
      const inputDate01 = this.el.querySelector('#inputDate01').value;
      const validationPriority01 = this.el.querySelector('#validationPriority01').value;
      const validationStatus01 = this.el.querySelector('#validationStatus01').value;

      axios.post('http://localhost:80/task', {
        category: validationCategory01,
        head: inputHead01,
        description: inputDescription01,
        date: inputDate01,
        priority: validationPriority01,
        status: validationStatus01
      }).then((response) => {
        if (response.data.status === 'success') {
          Cookies.set('createTaskNameCookie', 'createTaskValueCookie', { expires: 365 });
          Cookies.get('createTaskNameCookie');
          window.location.href = '/task';
        }
      });
    });
  }
};

export default Task;
