<?php

namespace App\Models;

use \PDO;
use stdClass;

class UserModel extends SqlConnect {
    public function add($data) {
      $query = "INSERT INTO users (last_name, first_name, email, password) VALUES (:last_name, :first_name, :email, :password)";
      $req = $this->db->prepare($query);
      $req->execute([
        'last_name' => $data['last_name'],
        'first_name' => $data['first_name'],
        'email' => $data['email'],
        'password' => $data['password']
      ]);
    }

    public function delete(int $id) {
      $req = $this->db->prepare("DELETE FROM users WHERE id = :id");
      $req->execute(["id" => $id]);
    }

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

    public function checkEmail($email) {
      $req = $this->db->prepare("SELECT id FROM users WHERE email = :email");
      $req->execute(["email" => $email]);
      $user = $req->fetch(PDO::FETCH_ASSOC);

      return $user !== false;
    }
}