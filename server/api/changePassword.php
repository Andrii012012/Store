<?php

function changePassword($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';

    $id = $_POST['id'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $oldPassword = $_POST['oldPassword'];
    $newPassword = $_POST['newPassword'];

    if (
        isset($name) > 0 && isset($surname) > 0 &&
        isset($email) > 0 && isset($oldPassword) > 0 && isset($newPassword) > 0
    ) {
        $newPassword = md5($newPassword);

        $getUser = mysqli_query($connect, "SELECT * FROM `user` WHERE `id` = '$id'");
        $user = mysqli_fetch_assoc($getUser);

        $getAddress = mysqli_query($connect, "UPDATE `user` SET `email`='$email',`name`='$name',`surname`='$surname' WHERE `id` = '$id'");

        if (md5($oldPassword) === $user['password'] && $getAddress) {
            $postUser = mysqli_query($connect, "UPDATE `user` SET `password`='$newPassword' WHERE `id` = '$id'");
            if (!$postUser) {
                echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
                $getUser->close();
                $postUser->close();
            }
            exit();
        } else {
            echo $NOT_CORRECTLY_PASSWORD_ERROR;
        }
        exit();
    } else {

        echo $NOT_CORRENTLY_VALUES_ERROR;
        exit();
    }

    exit();
}

?>