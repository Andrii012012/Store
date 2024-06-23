<?php

function addInBasket($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';

    $id = $_POST['id'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $originPrice = $_POST['originPrice'];
    $volume = $_POST['volume'];
    $things = $_POST['things'];

    $postBasket = mysqli_query($connect, "INSERT INTO `basket`(`id`, `name`, `price`, `things`, `volume`, `idBasket`, `checked`, `originPrice`) VALUES (NULL,'$name','$price','$things','$volume','$id','0','$originPrice')");

    if (!$postBasket) {
        echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
    }

    exit();
}

?>