<?php

function changeCountGoods($connect)
{
    include_once './constants/messageError.php';
    include './constants/status.php';
       
    $id = $_POST['id'];
    $price = $_POST['price'];
    $method = $_POST['method'];

    if ($id) {

        $getBasket = mysqli_query($connect, "SELECT * FROM `basket` WHERE `id` = '$id'");
        $arrayBasket = mysqli_fetch_assoc($getBasket);

        if ($arrayBasket) {

            $count = $arrayBasket['things'];
            $originPrice = $arrayBasket['originPrice'];

            $count = intval($count);
            $price = intval($price);

            $resultCount = $method === 'decrement' ? $count > 1 ? $count - 1 : $count : $count + 1;

            if ($count >= 1) {
                $price = $method === 'increment' ?
                    ($originPrice * $resultCount) :
                    ($price <= $originPrice ? $originPrice
                        : $price - $originPrice);

                $postBasket = mysqli_query($connect, "UPDATE `basket` SET `things`=$resultCount, `price`=$price WHERE `id` = '$id'");
                $postBasket->close();
            }

        } else {
            echo $NOT_CONNECTION_TO_SERVER_ERROR;
        }

        $getBasket->close();
    } else {
        echo $NOT_CORRENTLY_VALUES_ERROR;
    }
    exit();
}

?>