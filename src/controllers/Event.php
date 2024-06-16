<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\EventModel;

class Event extends Controller {
  protected object $eventModel;

  public function __construct($param) {
    $this->eventModel = new EventModel();

    parent::__construct($param);
  }

  public function postEvent() {
    $date = $this->body['date']?? ''; 
    $category = $this->body['category'] ?? '';
    $description =  $this->body['description']?? '';
    $head = $this->body['head']?? '';
    $priority = $this->body['priority']?? ''; 
  
    $event = [
      'date' => $date, 
      'category' => $category,
      'description' => $description,
      'head' => $head,
      'priority' => $priority
    ];

    $this->eventModel->add($event);
    echo json_encode(["status" => "success", "message" => "New event added!"]);

    $this->eventModel->add($this->body);

    return $this->eventModel->getLast();
  }

  public function deleteEvent() {
    return $this->eventModel->delete(intval($this->params['id']));
  }

  public function getEvent() {
    return $this->eventModel->get(intval($this->params['id']));
  }
}
