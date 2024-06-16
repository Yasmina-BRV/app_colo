import axios from 'axios';
import Cookies from 'js-cookie';

import viewNav from '../views/nav';
import viewFooter from '../views/footer';

import viewExpense from '../views/colloc/expense';
import viewExpenseTable from '../views/colloc/expenseTable';

const Expense = class {
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
        <div class="col-12">${viewExpense()}</div>
      </div>
      <div class="row">
        <div class="col-12">${viewFooter()}</div>
      </div>
    `;
  }

  async getExpenses() {
    try {
      const response = await axios.get('http://localhost:80/expenses');
      return response.data;
    } catch {
      return false;
    }
  }

  async expenses() {
    const table = document.querySelector('#expenses');
    const datas = await this.getExpenses();
    datas.forEach((data) => {
      table.insertAdjacentHTML('beforeend', viewExpenseTable(data));
    });
  }

  async run() {
    this.el.innerHTML = this.render();

    await this.expenses();

    const enterExpenseButton = this.el.querySelector('.enterExpenseButton');

    enterExpenseButton.addEventListener('click', () => {
      const validationCategory02 = this.el.querySelector('#validationCategory02').value;
      const inputPaidBy = this.el.querySelector('#inputPaidBy').value;
      const inputAmount02 = this.el.querySelector('#inputAmount02').value;
      const inputDate02 = this.el.querySelector('#inputDate02').value;
      const inputParticipant = this.el.querySelector('#inputParticipant').value;
      const inputAmountPerPerson = this.el.querySelector('#inputAmountPerPerson').value;
      const validationStatus02 = this.el.querySelector('#validationStatus02').value;

      axios.post('http://localhost:80/expense', {
        category: validationCategory02,
        paidBy: inputPaidBy,
        amount: inputAmount02,
        date: inputDate02,
        participant: inputParticipant,
        amountPerPerson: inputAmountPerPerson,
        status: validationStatus02
      }).then((response) => {
        if (response.data.status === 'success') {
          Cookies.set('enterExpenseNameCookie', 'enterExpenseValueCookie', { expires: 365 });
          Cookies.get('enterExpenseNameCookie');
          window.location.href = '/expense';
        }
      });
    });
  }
};

export default Expense;
