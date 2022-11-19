<?php

$serverName = "127.0.0.1";
$userName = "root";
$password = "";
$database = "guvi";

$conn = new mysqli($serverName,$userName,$password,$database);

if(mysqli_connect_error()){
    die("connection failed: ".mysqli_connect_error());
}

?>
