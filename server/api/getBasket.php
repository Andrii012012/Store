<?php

function getBasket($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';

    $id = $_POST['id'];

    if ($id) {
        $getBasket = mysqli_query($connect, "SELECT * FROM `basket` WHERE `idBasket` = '$id'");

        if ($getBasket) {

            $arrayBasket = array();

            while ($item = mysqli_fetch_assoc($getBasket)) {
                $item['price'] = intval($item['price']);
                $item['volume'] = intval($item['volume']);
                $item['things'] = intval($item['things']);
                $item['checked'] = intval($item['checked']);
                ;
                $item['originPrice'] = intval($item['originPrice']);
                $arrayBasket[] = $item;
            }

            $json = json_encode($arrayBasket);
            echo $json;
        } else {
            echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
            exit();
        }

        $getBasket->close();
        exit();
    } else {
        echo $NOT_CONNECTION_TO_SERVER_ERROR;
    }
    exit();
}

?>