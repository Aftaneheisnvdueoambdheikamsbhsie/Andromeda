<?php
// Koneksi ke database
$servername = "localhost";
$username = "root"; // atau sesuai username Anda
$password = ""; // atau sesuai password Anda
$dbname = "Andromeda"; // nama database Anda

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ambil data dari form
$name = $_POST['name'];
$gender = $_POST['gender'];
$height = $_POST['height'];
$weight = $_POST['weight'];
$birthdate = $_POST['birthdate'];
$category = $_POST['category'];

// Query untuk menyimpan data
$sql = "INSERT INTO peserta (name, gender, height, weight, birthdate, category) VALUES ('$name', '$gender', '$height', '$weight', '$birthdate', '$category')";

if ($conn->query($sql) === TRUE) {
    echo "Pendaftaran berhasil!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
