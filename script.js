import { auth } from "../firebase/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Função de cadastro
document.getElementById("cadastroBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            alert("Cadastro realizado com sucesso!");
        })
        .catch((error) => {
            alert("Erro ao cadastrar: " + error.message);
        });
});

// Função de login
document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            alert("Login realizado com sucesso!");
        })
        .catch((error) => {
            alert("Erro ao fazer login: " + error.message);
        });
});
