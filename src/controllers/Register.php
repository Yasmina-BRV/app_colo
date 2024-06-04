<?php 

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\UserModel;

class Register extends Controller{
  protected object $registerModel;

  public function __construct($param) {
    $this->registerModel = new UserModel();

    parent::__construct($param);
  }

  public function postRegister() {
    $lastName = $this->body['last_name']?? ''; 
    $firstName = $this->body['first_name'] ?? '';
    $email =  $this->body['email']?? '';
    $password = $this->body['password']?? '';

    if(empty($firstName) || empty($lastName) || empty($email) || empty($password)) {
      echo json_encode(['status' =>'fail', 'message' => 'All fields are required!']);
    }

    if ($this->registerModel->checkEmail($email)) {
      echo json_encode(["status" => "fail", "message" => "Email is already taken"]);
    }

    $hashPassword = password_hash($password, PASSWORD_DEFAULT);

    $user = [
      'last_name' => $lastName, 
      'first_name' => $firstName,
      'email' => $email,
      'password' => $hashPassword
    ];

    $this->registerModel->add($user);
    echo json_encode(["status" => "success", "message" => "New account created!"]);
  }
}


