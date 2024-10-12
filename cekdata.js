// cekdata.js

import { database } from './firebase-config.js'; // Import database dari firebase-config.js
import { ref, onValue } from "firebase/database"; // Import ref dan onValue

const pesertaRef = ref(database, 'peserta/'); // Referensi ke node 'peserta'

onValue(pesertaRef, (snapshot) => {
    const data = snapshot.val();
    const dataContainer = document.getElementById('data-container'); // Pastikan elemen ini ada di HTML
    dataContainer.innerHTML = ""; // Bersihkan sebelumnya

    if (data) {
        Object.entries(data).forEach(([key, value]) => {
            dataContainer.innerHTML += `<p>${value.nama}, ${value.jk}, ${value.tb} cm, ${value.bb} kg, ${value.ttl}, ${value.kategori}</p>`;
        });
    } else {
        dataContainer.innerHTML = "<p>Tidak ada data yang tersedia.</p>";
    }
});
