<?php

/* Application's routes */

$app->get  ('/api', 'CustomerController:Index');

/* Customer Routes */

$app->post  ('/api/auth/signup',            'CustomerController:Signup');
$app->post  ('/api/auth/signin',            'CustomerController:Signin');

$app->get   ('/api/secure/customer',               'CustomerController:Index');
$app->delete('/api/secure/customer/delete/{id}',   'CustomerController:DeleteCustomerById');
$app->get   ('/api/secure/customer/get/{id}',      'CustomerController:GetCustomerById');
$app->put   ('/api/secure/customer/update/{id}',   'CustomerController:UpdateCustomerById');

/* Product Routes */

$app->get   ('/api/secure/product',                    'ProductController:Index');
$app->get   ('/api/secure/product/all',                'ProductController:GetProducts');
$app->get   ('/api/secure/product/get/{reference}',    'ProductController:GetProductById');
$app->delete('/api/secure/product/delete/{reference}', 'ProductController:DeleteProductById');
$app->put   ('/api/secure/product/update/{reference}', 'ProductController:UpdateProductById');

?>