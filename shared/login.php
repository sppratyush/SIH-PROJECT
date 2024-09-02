<?php
$uname = $_POST['Username'];
$password = $_POST['Password'];
include "connection.php";
session_start();
$_SESSION["login_status"] = false;
$query = "select * from user where username='$uname' and password='$password'";
$sql_result = mysqli_query($conn,$query);
$dbrow = mysqli_fetch_assoc($sql_result);
if($sql_result->num_rows>0){
    echo "Login Successfull";

    $_SESSION["login_status"] = true;
    $_SESSION["username"] = $dbrow["username"];
    $_SESSION["userid"] = $dbrow["userid"];
    $_SESSION["usertype"] = $dbrow["usertype"];
    if($dbrow["usertype"] == "Student"){
        header("Location:../student/home.php");
    }else if($dbrow["usertype"] == "Admin"){
        header("Location:../admin/home.php");
    }
}else{
   
    echo "Invalid Username or Password";
}
?>