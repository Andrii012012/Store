<?php

function cancelOrder($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';

    $id = $_POST['id'];

    $getHistoryOrder = mysqli_query($connect, "SELECT * FROM `historyOrder` WHERE `idOrder` = '$id'");

    $order = $getHistoryOrder->fetch_assoc();

    if ($order['statusDelivery'] !== $RECEIVED && $order['statusDelivery'] !== $WAITING) {
        if ($id) {
            $postHistoryOrder = mysqli_query($connect, "UPDATE `historyOrder` SET `statusDelivery`='$CANCEL' WHERE `id` = $id");
            var_dump($postHistoryOrder, $id);
            exit();
        } else {
            echo $NOT_SUCCESS_CANCEL_ORDER_ERROR;
        }
    } else {
        echo $NOT_SUCCESS_CANCEL_ORDER_ERROR;
    }
    $getHistoryOrder->close();
    exit();
}

?>