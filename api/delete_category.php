<?php

if($_POST){
    include_once '../config/core.php';
    include_once '../config/database.php';
    include_once '../objects/category.php';

    $database = new Database();
    $db = $database->getConnection();
    $category = new Category($db);

    $ins = '';
    foreach($_POST['del_ids'] as $id){
        $ins .= "{$id},";
    }

    $ins = trim($ins, ',');

    echo $category->delete($ins) ? 'true' : 'false';
}