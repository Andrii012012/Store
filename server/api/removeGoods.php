<?php

function removeGoods($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';

    $id = $_POST['id'];

    if ($id) {
        $postBasket = mysqli_query($connect, "DELETE FROM `basket` WHERE `id` = '$id'");

        if (!$postBasket) {
            echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
        }

        exit();
    } else {
        echo $NOT_CORRENTLY_VALUES_ERROR;
    }
    exit();
}

?>