<?php
$email = $_POST['email'];
echo ($email);
$filename = __DIR__ . '/emails.txt';

file_put_contents($filename,  PHP_EOL . $email, FILE_APPEND);
echo "<script>window.close()</script>"
?>