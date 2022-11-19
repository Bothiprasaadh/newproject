<?php

include "mysql_connection.php";
include "redis_connection.php";

if($_SERVER['REQUEST_METHOD']=='POST'){

    $email = $_POST['email'];
    $password = $_POST['password'];
    $flag=true;
if(isset($_POST['email'])){
    $sql="SELECT * FROM user WHERE email='$email';";
    $result=$conn->query($sql);
    if($result->num_rows==0){
        $usernameErr="Username not found !";
        $flag=false;
        echo $usernameErr;
    }
}
if($flag)
if(isset($_POST['password'])){
    $sql="SELECT password FROM user WHERE email='$email';";
    $result=$conn->query($sql);
    $row=$result->fetch_assoc();
    if($password!=$row['password']){
        $passErr="Incorrect password !";
        echo $passErr;
    }
    else{
        $redis->set("user",$email);
      echo "ok";
    }
}
$conn->close();

}


?>