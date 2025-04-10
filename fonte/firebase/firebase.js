// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC-8w-h628k19k2QwPOomuzu7mLK8kMx1g",
    authDomain: "comeja-1d65f.firebaseapp.com",
    projectId: "comeja-1d65f",
    storageBucket: "comeja-1d65f.appspot.com",
    messagingSenderId: "414601562481",
    appId: "1:414601562481:web:c8652a27bbd3069a7c4ed0"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
