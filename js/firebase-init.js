// ============================================================
// Firebase Initialization - School Management System
// Project: common-school
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVq2PebR_dL9gip9AMD3mrBN7LqmLfYPU",
    authDomain: "common-school.firebaseapp.com",
    projectId: "common-school",
    storageBucket: "common-school.firebasestorage.app",
    messagingSenderId: "618378749848",
    appId: "1:618378749848:web:2dc3bd6dcca39547f9eded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Global references for script.js to use
window._firebaseDb = db;
window._firebaseDoc = doc;
window._firebaseSetDoc = setDoc;
window._firebaseGetDoc = getDoc;
window._firebaseOnSnapshot = onSnapshot;

// Signal that Firebase is ready
window._firebaseReady = true;
window.dispatchEvent(new Event('firebaseReady'));

console.log("✅ Firebase initialized - Project: common-school");
