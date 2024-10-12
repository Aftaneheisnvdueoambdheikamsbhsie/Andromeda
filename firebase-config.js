// firebase-config.js

// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0PBtiwbVjUjia1edNbW0UZ0L84rfcLDo",
  authDomain: "andromediadigital-ddcd0.firebaseapp.com",
  databaseURL: "https://andromediadigital-ddcd0-default-rtdb.firebaseio.com",
  projectId: "andromediadigital-ddcd0",
  storageBucket: "andromediadigital-ddcd0.appspot.com",
  messagingSenderId: "721176765748",
  appId: "1:721176765748:web:985df3d56d4f39fcb03161",
  measurementId: "G-L23NM7B6SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
// Event listener for form submission
const form = document.getElementById('registration-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('name').value;
    const jk = document.getElementById('gender').value;
    const tb = document.getElementById('height').value;
    const bb = document.getElementById('weight').value;
    const ttl = document.getElementById('birthdate').value;
    const kategori = document.getElementById('category').value;

    // Save to Firebase Realtime Database
    const pesertaRef = ref(database, 'peserta/');
    push(pesertaRef, {
        nama: nama,
        jk: jk,
        tb: tb,
        bb: bb,
        ttl: ttl,
        kategori: kategori
    })
    .then(() => {
        messageDiv.style.display = 'block';
        messageDiv.innerHTML = "Data berhasil disimpan! Apakah Anda ingin menginput data lagi? <button id='yes' class='back-button'>Ya</button> <button id='no' class='check-data-button'>Tidak</button>";

        document.getElementById('yes').addEventListener('click', function() {
            form.reset();
            messageDiv.style.display = 'none';
        });

        document.getElementById('no').addEventListener('click', function() {
            window.location.href = 'cekdata.html';
        });
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
        messageDiv.style.display = 'block';
        messageDiv.innerHTML = "Terjadi kesalahan saat menyimpan data: " + error.message;
    });
});
