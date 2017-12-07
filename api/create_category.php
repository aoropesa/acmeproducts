<?php

if($_POST){
    include_once '../config/core.php';
    include_once '../config/database.php';
    include_once '../objects/category.php';

    $database = new Database();
    $db = $database->getConnection();
    $category = new Category($db);

    $category->name = $_POST['name'];
    $category->description = $_POST['description'];

echo $category->create() ? 'true' : 'false';
}