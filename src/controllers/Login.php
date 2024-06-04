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

    if (empty($email) || (empty($password))) {
      echo json_encode(["status" => "fail", "message" => "All fields are required!"]);
      return;
    }

    $userPassword = $this->loginModel->getByEmail($email);

    if ($userPassword && password_verify($password, $userPassword["password"])) {
      echo json_encode(["status" => "success", "session" => $userPassword["first_name"]]);
    } else {
      echo json_encode(["status" => "fail", "message" => "Invalid credentials"]);
    }
  }
}