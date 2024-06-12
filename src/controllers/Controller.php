<?php

namespace App\Controllers;

class Controller {
  protected array $params;
  protected string $reqMethod;
  protected array $body;
  protected string $className;

  public function __construct($params) {
    $this->className = $this->getCallerClassName();
    $this->params = $params;
    $this->reqMethod = strtolower($_SERVER['REQUEST_METHOD']);
    $this->body = (array) json_decode(file_get_contents('php://input'), true);

    if ($this->reqMethod === 'options') {
      $this->handlePreflight();
      exit;
    }

    $this->header();
    $this->ifMethodExist();
  }

  protected function getCallerClassName() {
    $backtrace = debug_backtrace(DEBUG_BACKTRACE_PROVIDE_OBJECT, 2);

    if (isset($backtrace[1]['object'])) {
      $fullClassName = get_class($backtrace[1]['object']);
      $className = basename(str_replace('\\', '/', $fullClassName));

      return $className;
    }

    return 'Unknown';
  }

  protected function header() {
    header("Access-Control-Allow-Origin: http://127.0.0.1:9090");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 3600");
  }

  protected function handlePreflight() {
    header("Access-Control-Allow-Origin: http://127.0.0.1:9090");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Max-Age: 3600");
    header("HTTP/1.1 204 No Content"); 
    exit;
  }

  protected function ifMethodExist() {
    $method = $this->reqMethod . $this->className;
    if (method_exists($this, $method)) {
      $response = $this->$method();
      if ($response !== null) {
        echo json_encode($response);
      }
      return;
    }

    header('HTTP/1.0 404 Not Found');
    echo json_encode([
      'code' => '404',
      'message' => 'Not Found'
    ]);
  }
}