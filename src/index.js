import Router from './Router';
import Bot from './controllers/Bot';

import './index.scss';

const routes = [{
  url: '/search',
  controller: Bot
}];

new Router(routes);
