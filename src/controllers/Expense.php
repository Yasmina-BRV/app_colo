<?php 

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\ExpenseModel;

class Expense extends Controller{
  protected object $expenseModel;

  public function __construct($param) {
    $this->expenseModel = new ExpenseModel();

    parent::__construct($param);
  }

  public function postExpense() {
    $category = $this->body['category'] ?? '';
    $paidBy =  $this->body['paid_by']?? '';
    $amount = $this->body['amount']?? '';
    $date = $this->body['date']?? ''; 
    $participant =  $this->body['participant']?? '';
    $amountPerPerson = $this->body['amount_per_person']?? '';
    $status = $this->body['status']?? ''; 
  
    $expense = [
      'category' => $category,
      'paid_by' => $paidBy,
      'amount' => $amount,
      'date' => $date,
      'participant' => $participant,
      'amount_per_person' => $amountPerPerson,
      'status' => $status
    ];

    $this->expenseModel->add($expense);
    echo json_encode(["status" => "success", "message" => "New expense added!"]);

    $this->expenseModel->add($this->body);

    return $this->expenseModel->getLast();
  }

  public function deleteExpense() {
    return $this->expenseModel->delete(intval($this->params['id']));
  }

  public function getExpense() {
    return $this->expenseModel->get(intval($this->params['id']));
  }
}
