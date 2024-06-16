<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Login;
use App\Controllers\Register;
use App\Controllers\Task;
use App\Controllers\Tasks;
use App\Controllers\Expense;
use App\Controllers\Expenses;
use App\Controllers\Event;
use App\Controllers\Events;

new Router([
  'user/:id' => User::class,
  'login' => Login::class,
  'register' => Register::class,
  'task/:id' => Task::class,
  'task'=> Task::class,
  'tasks' => Tasks::class,
  'expense/:id' => Expense::class,
  'expense'=> Expense::class,
  'expenses' => Expenses::class,
  'event/:id' => Event::class,
  'event'=> Event::class,
  'events' => Events::class
]);
