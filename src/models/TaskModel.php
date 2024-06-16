<?php 

namespace App\Models;

use \PDO;
use stdClass;

class TaskModel extends SqlConnect{
  public function add(array $data) {
    $query = "
      INSERT INTO tasks (category, head, desription, limit_date, priority, status)
      VALUES (:category, :head, :desription, :limit_date, :priority, :status)
    ";

    $req = $this->db->prepare($query);
    $req->execute($data);
  }

  public function delete(int $id) {
    $req = $this->db->prepare("DELETE FROM tasks WHERE id = :id");
    $req->execute(["id" => $id]);
  }

  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM tasks WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM tasks ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getAll(){
    $req = $this->db->prepare("SELECT * FROM tasks");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetchAll(PDO::FETCH_ASSOC) : new stdClass();
  }
}
