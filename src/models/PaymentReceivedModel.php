<?php 

namespace App\Models;

use \PDO;
use stdClass;

class PaymentReceivedModel extends SqlConnect{
  public function add(array $data) {
    $query = "
      INSERT INTO payments_performed (category, amount, paid_by, date)
      VALUES (:category, :amount, :paid_by, :date)
    ";

    $req = $this->db->prepare($query);
    $req->execute($data);
  }

  public function delete(int $id) {
    $req = $this->db->prepare("DELETE FROM payments_received WHERE id = :id");
    $req->execute(["id" => $id]);
  }

  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM payments_received WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM payments_received ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }
}
