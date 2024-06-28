<?php

function register($connect){
include_once './constants/messageError.php';
include './constants/status.php';

    $login = $_POST['login'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];

    $avatar = ($gender === 'women' ? 'user-women.png' : 'user-men.png');

     if(strlen($login) > 4 && strlen($password) > 4 && $gender){
        $getUser = mysqli_query($connect, "SELECT * FROM `user` WHERE `login` = '$login' OR `email` = '$email'");
         $user = mysqli_fetch_assoc($getUser);

          if(!$user){
            $password = md5($password);
            $postUser = mysqli_query($connect, "INSERT INTO `user`(`id`, `login`, `password`, `email`, `gender`, `coins`, `marks`, `cashback`, `avatar`, `status`, `name`, `surname`, `token`) VALUES (NULL,'$login','$password','$email','$gender','0','100','2','$avatar','1',NULL,NULL,NULL)");
            exit();
          } else {
            echo $USER_EXIST_ERROR;
            exit();
          }
     } else{
        echo $DATA_TOO_SHORT_ERROR;
        exit();
     }
    exit();
  }


?>