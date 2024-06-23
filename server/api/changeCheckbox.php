<?php

function changeCheckbox($connect) {
include_once './constants/messageError.php';
include './constants/status.php';

    $id = $_POST['id'];
    $checked = $_POST['checked'];

      if($id && $checked){
         $postBasket = mysqli_query($connect, "UPDATE `basket` SET `checked`=$checked WHERE `id` = '$id'");
           if(!$postBasket){
             echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
           }
         $postBasket->close();
         exit();
      } else {
         echo $NOT_CORRENTLY_VALUES_ERROR;
      }
    exit();
  }


?>