<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\TaskModel;

class Tasks extends Controller {
  protected object $tasks;

  public function __construct($param) {
    $this->tasks = new TaskModel();

    parent::__construct($param);
  }

  public function getTasks() {
    return $this->tasks->getAll();
  }
}