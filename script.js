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
// Ambil elemen tombol dan tambahkan event listener
const loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah form dari refresh

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Proses login menggunakan Firebase
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Login berhasil
            const user = userCredential.user;
            console.log("Login berhasil!", user);
            // Redirect atau tampilkan halaman baru
            window.location.href = 'home.html'; // Ganti dengan halaman yang sesuai
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error login:", errorCode, errorMessage);
            alert("Login gagal: " + errorMessage); // Tampilkan pesan error
        });
});

// Inisialisasi Firebase (tambahkan kode Firebase Anda di sini)

const form = document.getElementById('registration-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Ambil data dari form
    const nama = document.getElementById('name').value;
    const jk = document.getElementById('gender').value;
    const tb = document.getElementById('height').value;
    const bb = document.getElementById('weight').value;
    const ttl = document.getElementById('birthdate').value;
    const kategori = document.getElementById('category').value;

    // Simpan data ke Firebase
    firebase.database().ref('peserta/').push({
        nama: nama,
        jk: jk,
        tb: tb,
        bb: bb,
        ttl: ttl,
        kategori: kategori
    })
    .then(() => {
        // Tampilkan pesan sukses
        messageDiv.style.display = 'block';
        messageDiv.innerHTML = "Data berhasil disimpan! Apakah Anda ingin menginput data lagi? <button id='yes'>Ya</button> <button id='no'>Tidak</button>";

        // Tambahkan event listener untuk tombol "Ya" dan "Tidak"
        document.getElementById('yes').addEventListener('click', function() {
            // Reset form untuk input data baru
            form.reset();
            messageDiv.style.display = 'none';
        });

        document.getElementById('no').addEventListener('click', function() {
            // Redirect ke cekdata.html
            window.location.href = 'cekdata.html';
        });
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
        messageDiv.style.display = 'block';
        messageDiv.innerHTML = "Terjadi kesalahan saat menyimpan data.";
    });
});
