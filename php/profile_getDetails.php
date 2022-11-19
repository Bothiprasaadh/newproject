<?php

include "mysql_connection.php";
include "mongodb_connection.php";
include "redis_connection.php";

$sql = "SELECT userId,name,username,email,mobile,dob FROM user WHERE email = 'spbothi@gmail.com'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

$userEmail = $redis->get("user"); 

$record = $collection->find(['userEmail'=>$userEmail]);

$data = array(
    'name' => $row['name'],
    'username' => $row['username'],
    'email' => $row['email'],
    'mobile' => $row['mobile'],
    'dob'=>$row['dob'],
    'userId'=>$row['userId'],
    'fatherName':$record['fatherName'],
    'motherName':$record['motherName'],
    'native':$record['native'],
    'pincode':$record['pincode'],
    'alternateMobile':$record['alternateMobile'],
    'qualification':$record['qualification'],
);

echo json_encode($data);



?>