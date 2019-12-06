<?php


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;
use \Slim\App;

require __DIR__ .'/../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');


const JWT_SECRET = "ANM12356";

$jwt = new \Slim\Middleware\JwtAuthentication([
    "path" => "/api/secure/",
    "secure" => false,
    "passthrough" => ["/api/auth/signin", "/api/auth/signup", "/api/secure/product/all"], 
    "secret" => JWT_SECRET,    
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function($response, $args) {
        $data = array('ERREUR' => 'ERREUR');
        return $response->writeHeader("Content-type", "application/json")->getBody()->write(json_encode($data));        
    }
]);


$app = new \Slim\App();  
$app->add($jwt);

$container = $app->getContainer();



// Customer controller
$container['CustomerController'] = function ($container, $jwt) {
    return new \App\Controllers\CustomerController($container, $jwt);
};


// Product controller
$container['ProductController'] = function ($container, $jwt) {
    return new \App\Controllers\ProductController($container, $jwt);
};



require __DIR__ . '/../app/routes.php';


$app->run();
?>