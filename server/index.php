<?php
header("Access-Control-Allow-Origin: *");
include_once './connect/connect.php';
include './api/register.php';
include './api/signIn.php';
include './api/setAddress.php';
include './api/changePassword.php';
include './api/cancelOrder.php';
include './api/addInBasket.php';
include './api/getBasket.php';
include './api/changeCheckbox.php';
include './api/removeGoods.php';
include './api/changeCountGoods.php';
include './api/checkoutOreder.php';
include './api/checkBunusField.php';

$action = isset($_GET['action']) ? $_GET['action'] : '';

  switch($action){
    case 'register': {
        register($connect);
        break;
    }
    case 'signIn': {
        signIn($connect);
        break;
    }
    case 'setAddress': {
      setAddress($connect);
      break;
    }
    case 'changePassword': {
      changePassword($connect);
      break;
    }
    case 'cancelOrder': {
       cancelOrder($connect);
       break;
    }
    case 'addInBasket': {
       addInBasket($connect);
       break;
    }
    case 'getBasket': {
      getBasket($connect);
      break;
    }
    case 'changeCheckbox': {
       changeCheckbox($connect);
       break;
    }
    case 'removeGoods': {
       removeGoods($connect);
       break;
    }
    case "changeCountGoods": {
       changeCountGoods($connect);
       break;
    }
    case 'checkoutOreder': {
       checkoutOrder($connect);
       break;
    }
    case 'checkBonusField': {
       checkBunusField($connect);
       break;
    }
  }

?>