function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
function exportData(id) {
    // Implement the logic to export data (to Excel or TXT)
    alert('Exporting data for ID: ' + id);
    // Add your export logic here
}

function printDiagram(id) {
    // Implement the logic to print the diagram
    alert('Printing diagram for ID: ' + id);
    // Add your print logic here
}
function saveData() {
    // Setelah menyimpan data ke database, gunakan console.log
    console.log("Data peserta berhasil disimpan!");
}
document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simpan data ke localStorage (atau bisa juga menggunakan Firebase)
    localStorage.setItem(username, password);

    alert("Akun berhasil dibuat! Silakan login.");

    // Redirect ke halaman login
    window.location.href = "login.html";
});

document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Cek kredensial yang tersimpan
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Login berhasil!");
        // Redirect ke halaman utama
        window.location.href = "home.html";
    } else {
        alert("Username atau password salah. Silakan coba lagi.");
    }
});

