<?php

function checkoutOrder($connect)
{
    include_once './constants/messageError.php';
    include './constants/status.php';

    $id = $_POST['id'];
    $formOrderDate = $_POST['fromOrderDate'];
    $price = $_POST['price'];
    $statusDelivery = $_POST['statusDelivery'];
    $waitDate = $_POST['waitDate'];
    $delivery = $_POST['delivery'];
    $consistOrder = $_POST['consistOrder'];
    $cashback = $_POST['cashback'];
    $ordersId = $_POST['ordersId'];
    $cause = $_POST['cause'];
    $bonusDate = $_POST['bonusDate'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $country = $_POST['country'];
    $locality = $_POST['locality'];
    $postcode = $_POST['postcode'];
    $email = $_POST['email'];
    $area = $_POST['area'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $detailInfo = $_POST['detailInfo'];
    $marks = $_POST['marks'];

    if ($id) {

        $consistOrderArray = json_decode($consistOrder, true);
        $ordersId = json_decode($ordersId, true);

        $getUser = mysqli_query($connect, "SELECT * FROM `user` WHERE `id` = '$id'");
        $user = $getUser->fetch_assoc();

        if ($user) {

            foreach ($ordersId as $item) {
                mysqli_query($connect, "DELETE FROM `basket` WHERE `id` = '$item'");
            }

            if ($user['marks'] >= $marks) {

                $cashback = intval($cashback);

                $cashbackResult = ($user['marks'] - $marks) + $cashback;

                 mysqli_query($connect, "INSERT INTO `historyBonus`(`id`, `date`, `marks`, `cause`, `idHistoryBonus`, `specificDate`) VALUES (NULL,'$formOrderDate','$cashback','$cause','$id','$bonusDate')");
                $postUser = mysqli_query($connect, "UPDATE `user` SET `marks`=$cashbackResult WHERE `id` = '$id'");
                 $postHistoryOrder = mysqli_query($connect, "INSERT INTO `historyOrder`(`id`, `fromOrderDate`, `price`, `statusDelivery`, `waitDate`, `idOrder`, `delivery`, `detailInfo`) VALUES (NULL,'$formOrderDate','$price','$statusDelivery','$waitDate','$id','$delivery', '$detailInfo')");
                
                if ($postHistoryOrder === true) {
                    $idLast = $connect->insert_id;

                    $postAddressOrder = mysqli_query($connect, "INSERT INTO `addressOrder`(`id`, `name`, `surname`, `country`, `locality`, `phone`, `email`, `area`, `postcode`, `idOrder`) VALUES (NULL,'$name','$surname','$country','$locality','$phone','$email','$area','$postcode','$idLast')");

                    foreach ($consistOrderArray as $item) {
                        $name = $item['name'];
                        $volume = $item['volume'];
                        $things = $item['things'];
                        mysqli_query($connect, "INSERT INTO `consistOrders`(`id`, `name`, `idOrder`, `things`, `volume`) VALUES (NULL,'$name','$idLast','$things','$volume')");
                    }

                }

                $getHistoryOrder = mysqli_query($connect, "SELECT * FROM `historyOrder` WHERE `idOrder` = '$id'");

                $arrayOrder = [];

                 while($item = $getHistoryOrder->fetch_assoc()){
                    $arraywfewr[] = $item;
                 }

                 if (count($arrayOrder) >= 4 && count($arrayOrder) < 9) {
                    mysqli_query($connect, "UPDATE `user` SET `cashback`=3,`status`=2 WHERE $id");
                    $user['status'] = 2;
                    $user['cashback'] = 3;
                } else if (count($arrayOrder) >= 9) {
                    mysqli_query($connect, "UPDATE `user` SET `status`=3 WHERE $id");
                    $user['status'] = 3;
                }


                $getHistoryOrder->close();

            } else {
                echo $NOT_CONNECTION_TO_SERVER_ERROR;
            }

        } else {
            echo $NOT_CORRENTLY_VALUES_ERROR;
        }
    }
    exit();
}

?>