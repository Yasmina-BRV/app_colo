<?php 

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\PaymentPerformedModel;

class PaymentPerformed extends Controller{
  protected object $task;

  public function __construct($param) {
    $this->task = new PaymentPerformedModel();

    parent::__construct($param);
  }

  public function postPaymentPerformed() {
    $this->task->add($this->body);

    return $this->task->getLast();
  }

  public function deletePaymentPerformed() {
    return $this->task->delete(intval($this->params['id']));
  }

  public function getPaymentPerformed() {
    return $this->task->get(intval($this->params['id']));
  }
}
