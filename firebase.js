// Importação e configuração do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Configuração do Firebase com suas credenciais
const firebaseConfig = {
    apiKey: "AIzaSyC-8w-h628k19k2QwPOomuzu7mLK8kMx1g",
    authDomain: "comeja-1d65f.firebaseapp.com",
    projectId: "comeja-1d65f",
    storageBucket: "comeja-1d65f.appspot.com",
    messagingSenderId: "414601562481",
    appId: "SUA_APP_ID" // Se tiver um App ID, insira aqui
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exportação para uso em outros arquivos
export { auth };
