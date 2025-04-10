import { auth, db } from "./firebase/firebase.js";

// Evento para captura do formulário de cadastro
document.getElementById("cadastro-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede envio padrão
    document.getElementById("loading").style.display = "block"; // Exibir indicador de carregamento

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
        const usuario = userCredential.user;

        // Enviar e-mail de verificação
        await usuario.sendEmailVerification();
        console.log(`E-mail de verificação enviado para: ${email}`);

        alert("Cadastro realizado com sucesso! Verifique seu e-mail antes de fazer login.");

        // Salvar usuário no Firestore, mesmo sem verificação de e-mail
        await db.collection("usuarios").doc(usuario.uid).set({
            email: usuario.email,
            criadoEm: new Date(),
            verificado: false
        });

        window.location.href = "login.html"; // Redireciona para login após cadastro
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);

        if (error.code === "auth/email-already-in-use") {
            alert("Este e-mail já está cadastrado. Tente outro!");
        } else if (error.code === "auth/weak-password") {
            alert("Senha muito fraca. Use pelo menos 6 caracteres!");
        } else {
            alert("Erro ao cadastrar usuário. Tente novamente mais tarde.");
        }
    } finally {
        document.getElementById("loading").style.display = "none"; // Ocultar indicador de carregamento
    }
});
