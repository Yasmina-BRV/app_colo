<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\ExpenseModel;

class Expenses extends Controller {
  protected object $expenses;

  public function __construct($param) {
    $this->expenses = new ExpenseModel();

    parent::__construct($param);
  }

  public function getExpenses() {
    return $this->expenses->getAll();
  }
}