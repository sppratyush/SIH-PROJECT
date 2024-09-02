<?php
include "connection.php";
$query = "insert into user(username,password,email,fullname,usertype) values('$_POST[Username]','$_POST[Password1]','$_POST[Email]','$_POST[Name]','$_POST[Usertype]')";
    mysqli_query($conn,$query)
?>