<?php

class Product{

    private $conn;
    private $table_name = 'products';

    public function __construct($db){
        $this->conn = $db;
    }

    public function readAll(){
        // Select all the data
        $query = "SELECT p.id, p.name, p.description, p.price, c.name as category_name 
             FROM " . $this->table_name . " p 
            LEFT JOIN categories c 
                 ON p.category_id=c.id
            ORDER BY id DESC";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($results);
    }

    public function readOne(){
        // Select one the data
        $query = "SELECT p.id, p.name, p.description, p.price, c.name as category_name 
        FROM " . $this->table_name . " p 
       LEFT JOIN categories c 
            ON p.category_id=c.id
       WHERE p.id=:id";

       $stmt = $this->conn->prepare($query);

       $id = htmlspecialchars(strip_tags($this->id));
       $stmt->binParam(':id', $id);
       $stmt->execute();

       $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

       return json_encode($results);
   }
}