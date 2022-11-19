<?php


include "mysql_connection.php";

$name=$email=$username=$pass=$mobile=$dob="";

if($_SERVER['REQUEST_METHOD']=="POST"){

    $name = $_POST["name"];
    $username = $_POST["username"];
    $dob = $_POST["dob"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $password = $_POST["password"];
    
    $sql="INSERT INTO user (username,name,mobile,dob,email,password) VALUES('$username','$name','$mobile','$dob','$email','$password');";


    try{
        if($conn->query($sql))
            echo "registered";
        else
            echo $conn->error();
    } catch(Exception $e){
        echo $e->getMessage();
    } finally{
        $conn->close();
    }
}



?>