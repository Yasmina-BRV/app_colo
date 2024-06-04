<?php 

namespace App\Models;

use \PDO;
use stdClass;

class LoginModel extends SqlConnect {
  public function get(int $id) {
    $req = $this->db->prepare("SELECT * FROM users WHERE id = :id");
    $req->execute(["id" => $id]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getLast() {
    $req = $this->db->prepare("SELECT * FROM users ORDER BY id DESC LIMIT 1");
    $req->execute();

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
  }

  public function getByEmail($email){
    $req = $this->db->prepare("SELECT * FROM users WHERE email = :email");
    $req->execute(["email" => $email]);

    return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : null;
  }
}