<?php

// autoload_psr4.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);

return array(
    'Slim\\Middleware\\' => array($vendorDir . '/tuupola/slim-jwt-auth/src'),
    'Slim\\' => array($vendorDir . '/slim/slim/Slim'),
    'Psr\\Log\\' => array($vendorDir . '/psr/log/Psr/Log'),
    'Psr\\Http\\Message\\' => array($vendorDir . '/psr/http-message/src'),
    'Psr\\Container\\' => array($vendorDir . '/psr/container/src'),
    'Interop\\Container\\' => array($vendorDir . '/container-interop/container-interop/src/Interop/Container'),
    'Firebase\\JWT\\' => array($vendorDir . '/firebase/php-jwt/src'),
    'FastRoute\\' => array($vendorDir . '/nikic/fast-route/src'),
    'App\\' => array($baseDir . '/app'),
);
