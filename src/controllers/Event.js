import axios from 'axios';
import Cookies from 'js-cookie';

import viewNav from '../views/nav';
import viewFooter from '../views/footer';

import viewEvent from '../views/colloc/event';
import viewEventTable from '../views/colloc/eventTable';

const Event = class {
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
        <div class="col-12">${viewEvent()}</div>
      </div>
      <div class="row">
        <div class="col-12">${viewFooter()}</div>
      </div>
    `;
  }

  async getEvents() {
    try {
      const response = await axios.get('http://localhost:80/events');
      return response.data;
    } catch {
      return false;
    }
  }

  async events() {
    const table = document.querySelector('tbody');
    const datas = await this.getEvents();
    datas.forEach((data) => {
      table.insertAdjacentHTML('beforeend', viewEventTable(data));
    });
  }

  async run() {
    this.el.innerHTML = this.render();

    await this.events();

    const addEventButton = this.el.querySelector('.addEventButton');

    addEventButton.addEventListener('click', () => {
      const inputDate03 = this.el.querySelector('#inputDate03').value;
      const validationCategory03 = this.el.querySelector('#validationCategory03').value;
      const inputDescription03 = this.el.querySelector('#inputDescription03').value;
      const inputHead03 = this.el.querySelector('#inputHead03').value;
      const validationPriority03 = this.el.querySelector('#validationPriority03').value;

      axios.post('http://localhost:80/event', {
        date: inputDate03,
        category: validationCategory03,
        description: inputDescription03,
        head: inputHead03,
        priority: validationPriority03
      }).then((response) => {
        if (response.data.status === 'success') {
          Cookies.set('createEventNameCookie', 'createEventValueCookie', { expires: 365 });
          Cookies.get('createEventNameCookie');
          window.location.href = '/event';
        }
      });
    });
  }
};

export default Event;
