<?php
session_start();
if(!isset($_SESSION["login_status"])){
    echo "Unauthorized access";
    die;
}

if($_SESSION["login_status"] == false){
    echo "Unauthorized access";
    die;
}

if($_SESSION["usertype"] != "Student"){
    echo "Forbidden Role error";
    die;
}
?>
