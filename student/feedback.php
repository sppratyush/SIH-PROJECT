<?php

$conn = new mysqli("localhost","root","","gradaim",3307);
$query = "insert into feedback(name,feedback,rating) values('$_POST[Name]','$_POST[Feedback]','$_POST[rating]')";
    mysqli_query($conn,$query)
?>