<?php
include 'database.php';
$conn = getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ambil data dari form
    $nama = $_POST['name'];
    $gender = $_POST['gender'];
    $height = $_POST['height'];
    $weight = $_POST['weight'];
    $birthdate = $_POST['birthdate'];
    $category = $_POST['category'];

    // Simpan data ke database
    $sql = "INSERT INTO peserta (nama, jk, tb, bb, ttl, kategori) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiiis", $nama, $gender, $height, $weight, $birthdate, $category);
    $stmt->execute();

    // Redirect atau tampilkan pesan sukses
    header("Location: cekdata.html");
    exit();
} else {
    // Jika bukan POST, tampilkan error
    echo "Method not allowed!";
}
?>
