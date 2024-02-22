import viewItemBot from './item-bot';

export default () => (`
  <ul class="list-group list-group-flush">
    ${viewItemBot()}
    ${viewItemBot()}
    ${viewItemBot()}
  </ul>
`);
