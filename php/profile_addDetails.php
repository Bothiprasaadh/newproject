<?php

include "mongodb_connection.php";
include "redis_connection.php";

$fatherName = $_POST['fatherName'];
$motherName = $_POST['motherName'];
$native = $_POST['native'];
$pincode = $_POST['pincode'];
$alternateMobile = $_POST['alternateMobile'];
$qualification = $_POST['qualification'];

$data = array(
    'fatherName':$fatherName,
    'motherName':$motherName,
    'native':$native,
    'pincode':$pincode,
    'alternateMobile':$alternateMobile,
    'qualification':$qualification,
    'userEmail', $redis->get("user")

);

$collection->insertOne($data);
echo "inserted";

?>