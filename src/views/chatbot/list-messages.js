import viewItemMessage from './item-message';

export default () => (`
  <ul>
    ${viewItemMessage()}
    ${viewItemMessage()}
    ${viewItemMessage()}
  </ul>
`);
