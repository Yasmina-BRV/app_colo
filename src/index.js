import Router from './Router';

import Collocation from './controllers/Collocation';
import Login from './controllers/Login';
import Profile from './controllers/Profile';
import Tasks from './controllers/Tasks';
import Expenses from './controllers/Expenses';
import Calendar from './controllers/Calendar';

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
  url: '/tasks',
  controller: Tasks
},
{
  url: '/expenses',
  controller: Expenses
},
{
  url: '/calendar',
  controller: Calendar
}
];

new Router(routes);
