import Router from './Router';

import Collocation from './controllers/Collocation';
import Login from './controllers/Login';
import Profile from './controllers/Profile';
import Task from './controllers/Task';
import Expense from './controllers/Expense';
import Event from './controllers/Event';

import './index.scss';

const routes = [{
  url: '/homepage',
  controller: Collocation
},
{
  url: '/login',
  controller: Login
},
{
  url: '/profile',
  controller: Profile
},
{
  url: '/task',
  controller: Task
},
{
  url: '/expense',
  controller: Expense
},
{
  url: '/event',
  controller: Event
}
];

new Router(routes);
