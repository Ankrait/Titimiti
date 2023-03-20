<?php
$email = $_GET['email'];
$filename = __DIR__ . '/email.txt';
file_put_contents($filename,  PHP_EOL . $email, FILE_APPEND);
