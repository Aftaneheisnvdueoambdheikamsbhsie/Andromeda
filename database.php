<?php
$host = 'localhost'; // Your database host
$user = 'username'; // Your database username
$pass = 'password'; // Your database password
$dbname = 'database_name'; // Your database name

// Create connection
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
