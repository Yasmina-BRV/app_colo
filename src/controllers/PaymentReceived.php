<?php 

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\PaymentReceivedModel;

class PaymentReceived extends Controller{
  protected object $task;

  public function __construct($param) {
    $this->task = new PaymentReceivedModel();

    parent::__construct($param);
  }

  public function postPaymentReceived() {
    $this->task->add($this->body);

    return $this->task->getLast();
  }

  public function deletePaymentReceived() {
    return $this->task->delete(intval($this->params['id']));
  }

  public function getPaymentReceived() {
    return $this->task->get(intval($this->params['id']));
  }
}
