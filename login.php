<?php
session_start();
include 'database.php';
$conn = getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Cek kredensial pengguna (Anda harus mengganti logika ini sesuai dengan tabel dan kolom yang ada)
    $sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password); // Pastikan untuk mengenkripsi password saat menyimpannya
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $_SESSION['username'] = $username; // Simpan informasi sesi
        header("Location: cekdata.html"); // Arahkan ke halaman data
        exit();
    } else {
        echo "Username atau password salah!";
    }
}
?>
