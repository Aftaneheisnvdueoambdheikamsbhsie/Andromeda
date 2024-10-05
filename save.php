<?php
include 'database.php'; // Menambahkan file koneksi database

// Membuat koneksi
$conn = getConnection(); // Mengambil koneksi dari fungsi

// Ambil data dari form
$name = $_POST['name'];
$gender = $_POST['gender'];
$height = $_POST['height'];
$weight = $_POST['weight'];
$birthdate = $_POST['birthdate'];
$category = $_POST['category'];

// Query untuk menyimpan data
// Query untuk menyimpan data
$sql = "INSERT INTO peserta (nama, jk, tb, bb, ttl, kategori) VALUES ('$name', '$gender', '$height', '$weight', '$birthdate', '$category')";

if ($conn->query($sql) === TRUE) {
    echo "Pendaftaran berhasil!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close(); // Menutup koneksi
?>
