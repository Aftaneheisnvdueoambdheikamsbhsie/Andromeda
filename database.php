<?php
function getConnection() {
    $servername = "localhost";
    $username = "root"; // Sesuaikan dengan username Anda
    $password = ""; // Sesuaikan dengan password Anda
    $dbname = "andromeda"; // Nama database Anda

    // Membuat koneksi
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Cek koneksi
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}
?>
