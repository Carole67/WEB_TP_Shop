<?php


namespace App\Controllers;

use \Firebase\JWT\JWT;

class CustomerController 
{
    
    const JWT_SECRET = "ANM12356";
    private $container;
    private $jwt;
    
    // Create new instance of class
    public function __constructor($container, $jwt) {
        $this->container = $container;
        $this->jwt = $jwt;
    }
    
    
    public function Index($request, $response, $args) 
    {
        return $response->write("Index");
    }
    
    // signin customer
    public function Signin($request, $response, $args) {
        
        $body = $request->getParsedBody();
        
        $userid = "ANM30299";
        $login = $body["login"];
        $password = $body["password"];
        
        $issuedAt = time();
        $expirationTime = $issuedAt + 10000; // jwt valid for 60 seconds from the issued time
        
        $payload = array(
            'userId' => $userid,
            'login' => $login,
            'password' => $password,
            'iat' => $issuedAt,
            'exp' => $expirationTime
        );
        $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256"); 
        
        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}")->withHeader("Content-Type", "application/json");        
        $data = array(
            'login' => $login, 
            'userId' => $userid, 
            'AuthorizationType' => "Bearer", 
            'Authorization' => $token_jwt
        );
        
        return $response->withJson($data);
    }
    
    // register new customer
    public function Signup($request, $response, $args) {
        $body = $request->getParsedBody(); // Parse le body
    
        $donnees = array(
            'firstname' => $body['firstname'], 
            'lastname' => $body['lastname'],
            'genre' => $body['genre'],
            'country' => $body['country'],
            'adresse' => $body['adresse'],
            'postalCode' => $body['postalCode'],
            'city' => $body['city'],
            'phone' => $body['phone'],
            'email' => $body['email'],
            'login' => $body['login'],
            'password' => $body['password'],
            'confirm' => $body['confirm']     
        );

        return json_encode($donnees);
    }
    
    // Get specific products
    public function GetCustomerById($request, $response, $args) {
        //TODO ...
        return $response->write("GetCustomerById");
    }
    
    // Delete specific customer
    public function DeleteCustomerById($request, $response, $args) {
        //TODO ...
        return $response->write("DeleteCustomerById");
    }
    
    // Update specific customer
    public function UpdateCustomerById($request, $response, $args) {
        //TODO ...
        return $response->write("UpdateCustomerById");
    }
    
    
}

?>