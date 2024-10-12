// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0PBtiwbVjUjia1edNbW0UZ0L84rfcLDo",
    authDomain: "andromediadigital-ddcd0.firebaseapp.com",
    projectId: "andromediadigital-ddcd0",
    storageBucket: "andromediadigital-ddcd0.appspot.com",
    messagingSenderId: "721176765748",
    appId: "1:721176765748:web:yourAppId" // Ganti dengan appId yang sesuai
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = firebase.firestore();

// Event listener untuk form registrasi
document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form dari refresh

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const birthdate = document.getElementById('birthdate').value;
    const category = document.getElementById('category').value;

    // Simpan data ke Firestore
    db.collection("peserta").add({
        nama: name,
        jk: gender,
        tb: height,
        bb: weight,
        ttl: birthdate,
        kategori: category
    })
    .then(() => {
        alert("Registrasi berhasil!");
        document.getElementById('registration-form').reset(); // Reset form setelah berhasil
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Registrasi gagal: " + error.message);
    });
});
