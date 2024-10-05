<?php
include 'database.php'; // Menghubungkan ke database

$conn = getConnection(); // Mendapatkan koneksi

$sql = "SELECT * FROM peserta"; // Query untuk mengambil semua data
$result = $conn->query($sql); // Menjalankan query

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Data Peserta</title>
</head>
<body>
    <header>
        <h1>Data Peserta Pencak Silat</h1>
    </header>
    <main>
        <table>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Tinggi Badan</th>
                <th>Berat Badan</th>
                <th>Tanggal Lahir</th>
                <th>Kategori</th>
            </tr>
            <?php
            // Memeriksa apakah ada hasil
            if ($result->num_rows > 0) {
                // Menampilkan data dari setiap baris
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                        <td>" . $row["id"] . "</td>
                        <td>" . $row["nama"] . "</td>
                        <td>" . $row["jk"] . "</td>
                        <td>" . $row["tb"] . "</td>
                        <td>" . $row["bb"] . "</td>
                        <td>" . $row["ttl"] . "</td>
                        <td>" . $row["kategori"] . "</td>
                    </tr>";
                }
            } else {
                echo "<tr><td colspan='7'>Tidak ada data peserta.</td></tr>";
            }
            ?>
        </table>
    </main>
</body>
</html>
