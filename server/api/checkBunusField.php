<?php

function checkBunusField($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';

    $id = $_POST['id'];
    $marks = $_POST['marks'];

    $getUser = mysqli_query($connect, "SELECT * FROM `user` WHERE `id` = '$id'");
    $user = $getUser->fetch_assoc();

    if ($getUser) {

        if ($user['marks'] >= $marks) {
            exit();
        } else {
            echo $NOT_ENOUGH_BONUS;
            exit();
        }

    } else {
        echo $NOT_SUCCESSFULLY_COMPLETING_TAKS_ERROR;
        $getUser->close();
    }

    $getUser->close();
    exit();

}

?>