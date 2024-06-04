<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Login;
use App\Controllers\Register;

new Router([
  'user/:id' => User::class,
  'login' => Login::class,
  'register' => Register::class
]);
