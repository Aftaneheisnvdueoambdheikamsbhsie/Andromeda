<?php
include 'koneksi.php'; // Menghubungkan dengan file koneksi

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari form
    $nama = $_POST['nama'];
    $jk = $_POST['jk'];
    $tb = $_POST['tb'];
    $bb = $_POST['bb'];
    $ttl = $_POST['ttl'];
    $kategori = $_POST['kategori'];

    // Menyimpan data ke database
    $sql = "INSERT INTO peserta (nama, jk, tb, bb, ttl, kategori) VALUES ('$nama', '$jk', '$tb', '$bb', '$ttl', '$kategori')";

    if ($conn->query($sql) === TRUE) {
        echo "Data berhasil disimpan!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close(); // Menutup koneksi
?>
