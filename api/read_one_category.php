<?php

include_once '../config/core.php';
include_once '../config/database.php';
include_once '../objects/category.php';

$database = new Database();
$db = $database->getConnection();
$category = new Category($db);

$category->id = $_GET['prod_id'];
$results = $category->readOne();

echo $results;
