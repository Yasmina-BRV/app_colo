<?php 

namespace App\Models;

use \PDO;
use stdClass;

class ExpensesModel extends SqlConnect{
  public function add(array $data) {
    $query = "
      INSERT INTO expenses (category, paid_by, amount, date, participant, amount_per_person, status)
      VALUES (:category, :paid_by, :amount, :date, :participant, :amount_per_person, :status)
    ";

    $req = $this->db->prepare($query);
    $req->execute($data);
  }

  public function delete(int $id) {
    $req = $this->db->prepare("DELETE FROM expenses WHERE id = :id");
    $req->execute(["id" => $id]);
  }

  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM expenses WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM expenses ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}
