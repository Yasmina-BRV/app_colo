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

    $userData = $this->loginModel->getByEmail($email);

    if ($userData && password_verify($password, $userData["password"])) {

      $user = $userData["name"];

      $cookie = "username=$user; expires=Mon, 15 Jun 2026 17:00:00 UTC;";

      echo json_encode(["status" => "success", "first_name" => $userData["first_name"], "cookie" => $cookie]);
    } else {
      echo json_encode(["status" => "fail", "message" => "Invalid credentials"]);
    }
  }
}