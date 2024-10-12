// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0PBtiwbVjUjia1edNbW0UZ0L84rfcLDo",
  authDomain: "andromediadigital-ddcd0.firebaseapp.com",
  projectId: "andromediadigital-ddcd0",
  storageBucket: "andromediadigital-ddcd0.appspot.com",
  messagingSenderId: "721176765748",
  appId: "1:721176765748:web:yourAppId" // Pastikan ini diisi dengan appId yang benar
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(username, password)
    .then((userCredential) => {
        // Berhasil login
        alert("Login berhasil!");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
    });
}

