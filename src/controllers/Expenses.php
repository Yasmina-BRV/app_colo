<?php 

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\ExpensesModel;

class Expenses extends Controller{
  protected object $task;

  public function __construct($param) {
    $this->task = new ExpensesModel();

    parent::__construct($param);
  }

  public function postExpenses() {
    $this->task->add($this->body);

    return $this->task->getLast();
  }

  public function deleteExpenses() {
    return $this->task->delete(intval($this->params['id']));
  }

  public function getExpenses() {
    return $this->task->get(intval($this->params['id']));
  }
}
