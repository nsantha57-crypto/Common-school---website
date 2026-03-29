// Firebase Configuration - School Management System
// Same approach as Samagi Society page (compat SDK)

const firebaseConfig = {
    apiKey: "AIzaSyDVq2PebR_dL9gip9AMD3mrBN7LqmLfYPU",
    authDomain: "common-school.firebaseapp.com",
    projectId: "common-school",
    storageBucket: "common-school.firebasestorage.app",
    messagingSenderId: "618378749848",
    appId: "1:618378749848:web:2dc3bd6dcca39547f9eded"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("✅ Firebase initialized - common-school project");
