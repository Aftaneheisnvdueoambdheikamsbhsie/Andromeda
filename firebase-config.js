// firebase-config.js

// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
const database = getDatabase(app); // Inisialisasi database
export { database }; // Ekspor database untuk digunakan di file lain
