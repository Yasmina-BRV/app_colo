import axios from 'axios';

import viewNav from '../views/nav';
import viewFooter from '../views/footer';

import viewLogin from '../views/colloc/login';

const Login = class {
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
        <div class="col-12">${viewLogin()}</div>
      </div>
      <div class="row">
        <div class="col-12">${viewFooter()}</div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();

    const loginButton = this.el.querySelector('.loginButton');
    const registerButton = this.el.querySelector('.registerButton');

    loginButton.addEventListener('click', () => {
      const emailInput = this.el.querySelector('#inputEmail2').value;
      const passwordInput = this.el.querySelector('#inputPassword2').value;

      axios.post('http://localhost:80/login', {
        email: emailInput,
        password: passwordInput
      }).then((response) => {
        if (response.data.status === 'success') {
          document.cookie = response.data.cookie;
          // document.cookie = "username=Yasmina Bravo; expires=Mon, 17 Jun 2024 17:00:00 UTC;";
          window.location.href = '/homepage';
        } else {
          window.location.href = '/login';
        }
      });
    });

    registerButton.addEventListener('click', () => {
      const lastNameInput = this.el.querySelector('#inputLastName').value;
      const firstNameInput = this.el.querySelector('#inputFirstName').value;
      const emailInput = this.el.querySelector('#inputEmail1').value;
      const passwordInput = this.el.querySelector('#inputPassword1').value;

      axios.post('http://localhost:80/register', {
        last_name: lastNameInput,
        first_name: firstNameInput,
        email: emailInput,
        password: passwordInput
      }).then((response) => {
        if (response.data.status === 'success') {
          document.cookie = response.data.cookie;
          window.location.href = '/homepage';
        } else {
          window.location.href = '/login';
        }
      });
    });
  }
};

export default Login;
