// script.js

import { database } from './firebase-config.js'; // Import database dari firebase-config.js
import { ref, push } from "firebase/database"; // Import ref dan push untuk operasi database

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

    const pesertaRef = ref(database, 'peserta/'); // Referensi ke node 'peserta'

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
            window.location.href = 'cekdata.html'; // Redirect ke cekdata.html
        });
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
        messageDiv.style.display = 'block';
        messageDiv.innerHTML = "Terjadi kesalahan saat menyimpan data: " + error.message;
    });
});
