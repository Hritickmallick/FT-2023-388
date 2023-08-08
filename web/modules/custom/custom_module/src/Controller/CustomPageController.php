<?php

namespace Drupal\custom_module\Controller;

use Drupal\Core\Controller\ControllerBase;

class CustomPageController extends ControllerBase {

  public function content() {
    return [
      '#type' => 'markup',
      '#markup' => '<h2>Welcome to the custom page!</h2>',
    ];
  }

}

?>