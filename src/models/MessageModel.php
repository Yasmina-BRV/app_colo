<?php

namespace App\Models;

use \PDO;
use stdClass;

class MessageModel extends SqlConnect {
    public function add(array $data) {
      $query = "
        INSERT INTO messages (author, avatar, type, text, date)
        VALUES (:messages, :author, :avatar, :type, :text, :date)
      ";

      $req = $this->db->prepare($query);
      $req->execute($data);
    }

    public function delete(int $id) {
      $req = $this->db->prepare("DELETE FROM messages WHERE id = :id");
      $req->execute(["id" => $id]);
    }

    public function get(int $id) {
      $req = $this->db->prepare("SELECT * FROM messages WHERE id = :id");
      $req->execute(["id" => $id]);

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function getLast() {
      $req = $this->db->prepare("SELECT * FROM messages ORDER BY date DESC LIMIT 1");
      $req->execute();

      return $req->rowCount() > 0 ? $req->fetch(PDO::FETCH_ASSOC) : new stdClass();
    }

    public function post(){
      $req = $this->db->prepare("INSERT INTO messages (author, avatar, type, text, date) VALUES (:messages, :author, :avatar, :type, :text, :date)");
      $req->execute();

    }
}