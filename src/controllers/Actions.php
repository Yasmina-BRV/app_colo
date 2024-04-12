<?php

namespace App\Controllers;

use App\Models\BotModel;

class Actions {
  protected array $params;
  protected string $reqMethod;
  protected object $bot;

  public function __construct($params) {
    $this->params = $params;
    $this->reqMethod = strtolower($_SERVER['REQUEST_METHOD']);
    $this->bot = new BotModel();

    $this->run();
  }

  public function getActions() {
    $bots = $this->bot->getAll();
    $responses = [];

    foreach ($bots as $bot) {
      $actions = json_decode($bot['actions']);

      foreach ($actions as $action) {
        $words = $action->words;

        foreach ($words as $word) {
          if ($word == $this->params['keyword']) {
            $name = $action->name;
            $method = 'action'.$name;

            if (method_exists($this, $method)) {
              $message = [
                'author' => $bot['name'],
                'avatar' => $bot['avatar'],
                'type' => 'bot',
                'date' => date("F j, Y"),
                'text' => $this->$method()
              ];

              array_push($responses, $message);
            }
          }
        }
      }
    }

    return $responses;
  }

  private function actionhello() {
    return 'hello';
  }

  private function actiontime() {
    return date("g:i a");
  }

  private function actionbye() {
    return 'see you soon';
  }

  private function actionrobot() {
    return 'good robot';
  }

  protected function header() {
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json; charset=utf-8');
  }

  protected function ifMethodExist() {
    $method = $this->reqMethod.'Actions';

    if (method_exists($this, $method)) {
      echo json_encode($this->$method());

      return;
    }

    header('HTTP/1.0 404 Not Found');
    echo json_encode([
      'code' => '404',
      'message' => 'Not Found'
    ]);

    return;
  }

  protected function run() {
    $this->header();
    $this->ifMethodExist();
  }
}
