<?php

function signIn($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';

    $login = $_POST['login'];
    $password = $_POST['password'];

    $password = md5($password);

    $getUser = mysqli_query($connect, "SELECT * FROM `user` WHERE `login` = '$login' AND `password` = '$password'");

    $user = mysqli_fetch_assoc($getUser);

    if ($user) {

        $idUser = $user['id'];

        $getHistoryBonus = mysqli_query($connect, "SELECT * FROM `historyBonus` WHERE `idHistoryBonus` = '$idUser'");

        $getAddress = mysqli_query($connect, "SELECT * FROM `address` WHERE `idAddress` = '$idUser'");

        $getHistoryOrder = mysqli_query($connect, "SELECT * FROM `historyOrder` WHERE `idOrder` = '$idUser'");

        $arrayBonus = array();

        while ($item = mysqli_fetch_assoc($getHistoryBonus)) {
            $arrayBonus[] = $item;
        }

        $arrayOrder = array();

        while ($item = mysqli_fetch_assoc($getHistoryOrder)) {
            $id = $item['id'];
            $cosist = mysqli_query($connect, "SELECT * FROM `consistOrders` WHERE `idOrder` = '$id'");

            $arrayConsistOrder = array();

            while ($itemConsist = mysqli_fetch_assoc($cosist)) {
                $itemConsist['volume'] = intval($itemConsist['volume']);
                $itemConsist['things'] = intval($itemConsist['things']);
                $arrayConsistOrder[] = $itemConsist;
            }

            $item['consistOrder'] = $arrayConsistOrder;
            $arrayOrder[] = $item;
        }

        $user['historyBonus'] = $arrayBonus;
        $user['historyOrder'] = $arrayOrder;
        $user['address'] = mysqli_fetch_assoc($getAddress);


        $json = json_encode($user);

        echo ($json);

    } else {
        echo $USER_NOT_EXIST_ERROR;
        exit();
    }
    $getHistoryBonus->close();
    $getAddress->close();
    $getHistoryOrder->close();
    exit();
}

?>