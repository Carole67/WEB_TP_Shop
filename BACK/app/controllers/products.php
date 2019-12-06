<?php

namespace App\Controllers;

use \Firebase\JWT\JWT;


class ProductController 
{
    /* Attributes */
   

    /* Constructor */
    const JWT_SECRET = "ANM12356";
    private $container;
    private $jwt;
    
    // Create new instance of class
    public function __constructor($container, $jwt) {
        $this->container = $container;
        $this->jwt = $jwt;
    }
    
    /* Methods */
    
    
    public function Index ($request, $response, $args) {
        return $response->write("Product");
    }
    
    // Get all products
    public function GetProducts($request, $response, $args) {
        $products = file_get_contents(__DIR__ . "/../../mock/products.json");
        //return $response->write("Product");
        return $response->withHeader("Content-Type", "application/json")->write($products);
    }
    
    // Get specific product
    public function GetProductById($request, $response, $args) {
        if ( isset($args['reference']) ) {            
            
            $products = json_decode(file_get_contents(__DIR__ . "/../../mock/products.json"));
            
            foreach($products as $index => $product) 
            {
                if($product->reference == $args['reference'])
                {
                    return $response->withHeader("Content-Type", "application/json")->write(json_encode($product));
                }
            }
            
        }
    }
    
    // Delete specific product
    public function DeleteProductById($request, $response, $args) {
        // TODO ...
        return $response;
    }    
    // Update specific product
    public function UpdateProductById($request, $response, $args) {
        // TODO ...
        return $response;
    }
}

?>