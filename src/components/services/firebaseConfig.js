

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'; // Import the getAuth function for authentication

const firebaseConfigration = {
    apiKey: "AIzaSyAjS31TMjBAWoTOr8NLvAeGos2Odq_kXc0",
    authDomain: "pro1-73775.firebaseapp.com",
    projectId: "pro1-73775",
    storageBucket: "pro1-73775.appspot.com",
    messagingSenderId: "611169572402",
    appId: "1:611169572402:web:ded28ca00b50fd91cece2b",
    measurementId: "G-42D1SQ4G2G"
}

const firebaseApp = initializeApp(firebaseConfigration);
export { firebaseApp }; // Export the firebaseApp instance
const auth = getAuth(firebaseApp); // Initialize authentication using the getAuth function

export { auth };