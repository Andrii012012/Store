<?php

require_once 'vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function signIn($connect)
{
include_once './constants/messageError.php';
include './constants/status.php';
include './constants/JWT.php';

    $login = $_POST['login'];
    $password = $_POST['password'];

    $password = md5($password);

    $headers = apache_request_headers();

    if(isset($_POST['token'])){    
       $decoded = JWT::decode($_POST['token'], new Key($SECRET_JWT, 'HS256'));

         $login = $decoded->login;
         $password = $decoded->password;

         user($login, $password, $connect);
     } else {
         createToken($login, $password, $connect);
         user($login, $password, $connect);
     } 
 }

 function createToken($login, $password, $connect){

    include './constants/JWT.php';

    $getUser = mysqli_query($connect, "SELECT * FROM `user` WHERE `login` = '$login' AND `password` = '$password'");

    $user = mysqli_fetch_assoc($getUser);

    $idUser = $user['id'];

    $payload = array(
        'iss' => 'sharmacoder',
        'iat' => time(),
        'exp' => strtotime("+30 minute"),
        'login' => $login,
        'password' => $password,
     );

     $jwt = JWT::encode($payload, $SECRET_JWT, 'HS256');

     mysqli_query($connect, "UPDATE `user` SET `token`='$jwt' WHERE `id` = '$idUser'");
   
 }

 function user($login, $password, $connect){
   
    $getUser = mysqli_query($connect, "SELECT * FROM `user` WHERE `password` = '$password' AND `login` = '$login'");

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
     };

?>