// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0PBtiwbVjUjia1edNbW0UZ0L84rfcLDo",
    authDomain: "andromediadigital-ddcd0.firebaseapp.com",
    projectId: "andromediadigital-ddcd0",
    storageBucket: "andromediadigital-ddcd0.appspot.com",
    messagingSenderId: "721176765748",
    appId: "1:721176765748:web:yourAppId" // Ganti dengan appId yang benar
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Event listener untuk form login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form dari refresh

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Proses login menggunakan Firebase
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // Login berhasil
            const user = userCredential.user;
            console.log("Login berhasil!", user);
            // Redirect ke halaman home
            window.location.href = 'home.html'; // Ganti dengan halaman yang sesuai
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error login:", errorCode, errorMessage);
            alert("Login gagal: " + errorMessage); // Tampilkan pesan error
        });
});
