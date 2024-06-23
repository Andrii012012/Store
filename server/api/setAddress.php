<?php

function setAddress($connect)
{
    include_once './constants/messageError.php';
    include './constants/status.php';

    $id = $_POST['id'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $country = $_POST['country'];
    $address = $_POST['address'];
    $locality = $_POST['locality'];
    $area = $_POST['area'];
    $postcode = $_POST['postcode'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    if (
        strlen($name) > 0 && strlen($surname) > 0 &&
        strlen($country) > 0 && strlen($address) > 0
        && strlen($locality) > 0 && strlen($area) > 0 &&
        strlen($postcode) > 0 && strlen($phone) > 0 &&
        strlen($email) > 0
    ) {

        $getAddress = mysqli_query($connect, "SELECT * FROM `address` WHERE `idAddress` = '$id'");

        if (!mysqli_fetch_assoc($getAddress)) {
            $postAddress = mysqli_query($connect, "INSERT INTO `address`(`id`, `name`, `surname`, `country`, `address`, `locality`, `area`, `postcode`, `phone`, `email`, `idAddress`) VALUES ('$id','$name','$surname','$country','$address','$locality','$area','$postcode','$phone','$email', '$id')");
            if (!$postAddress) {
                echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
                $postAddress->close();
            }
        } else {
            $postAddress = mysqli_query($connect, "UPDATE `address` SET `id`='$id',`name`='$name',`surname`='$surname',`country`='$country',`address`='$address',`locality`='$locality',`area`='$area',`postcode`='$postcode',`phone`='$phone',`email`='$email' WHERE `idAddress` = '$id'");
            if (!$postAddress) {
                echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
                $postAddress->close();
            }
        }

        exit();
    }

    exit();
}

?>