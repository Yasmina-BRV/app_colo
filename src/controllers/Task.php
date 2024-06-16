<?php 

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\TaskModel;

class Task extends Controller{
  protected object $taskModel;

  public function __construct($param) {
    $this->taskModel = new TaskModel();

    parent::__construct($param);
  }

  public function postTask() {
    $category = $this->body['category']?? ''; 
    $head = $this->body['head'] ?? '';
    $description =  $this->body['description']?? '';
    $limitDate = $this->body['limit_date']?? '';
    $priority = $this->body['priority']?? ''; 
    $status = $this->body['status'] ?? '';

    $task = [
      'category' => $category, 
      'head' => $head,
      'description' => $description,
      'limit_date' => $limitDate,
      'priority' => $priority,
      'status' => $status
    ];

    $this->taskModel->add($task);
    echo json_encode(["status" => "success", "message" => "New task created!"]);

    return $this->taskModel->getLast();
  }

  public function deleteTask() {
    return $this->taskModel->delete(intval($this->params['id']));
  }

  public function getTask() {
    return $this->taskModel->get(intval($this->params['id']));
  }
}
