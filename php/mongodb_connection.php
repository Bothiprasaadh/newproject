<?php

$m = new MongoClient("mongodb://localhost:27017");
$db = $m->mydb;

$collection = $db->guvi;
?>