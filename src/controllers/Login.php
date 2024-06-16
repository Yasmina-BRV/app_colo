<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\LoginModel;

class Login extends Controller {
  protected object $loginModel;

  public function __construct($param) {
    $this->loginModel = new LoginModel();
    parent::__construct($param);
  }

  public function postLogin() {
    $email = $this->body["email"];
    $password = $this->body["password"];
    // $id = $this->body["id"];

    if (empty($email) || (empty($password))) {
      echo json_encode(["status" => "fail", "message" => "All fields are required!"]);
      return;
    }

    $userData = $this->loginModel->getByEmail($email);

    if ($userData && password_verify($password, $userData["password"])) {

      session_start(); 
      $session_id = session_id();

      header('HTTP/1.1 200 OK');

      echo json_encode(["status" => "success", "session_id" => $session_id]);

    } else {
      echo json_encode(["status" => "fail", "message" => "Invalid credentials"]);
    }
  }
}