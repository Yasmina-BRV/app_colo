import viewNav from '../views/nav';
import viewFooter from '../views/footer';

import viewProfile from '../views/colloc/profile';

const Profile = class {
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
        <div class="col-12">${viewProfile()}</div>
      </div>
      <div class="row">
        <div class="col-12">${viewFooter()}</div>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Profile;
