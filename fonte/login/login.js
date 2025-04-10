import { auth } from "./firebase/firebase.js";

// Verificar sessão ativa ao carregar a página
auth.onAuthStateChanged((usuario) => {
    if (usuario) {
        console.log(`Usuário logado: ${usuario.email}`);
        document.getElementById("user-info").textContent = `Bem-vindo, ${usuario.email}!`;
        window.location.href = "home.html"; // Redireciona automaticamente se já estiver logado
    }
});

// Evento de envio do formulário de login
document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede envio padrão
    document.getElementById("loading").style.display = "block"; // Exibir indicador de carregamento

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, senha);
        const usuario = userCredential.user;

        if (!usuario.emailVerified) {
            alert("Verifique seu e-mail antes de fazer login!");
            return;
        }

        alert(`Login realizado com sucesso, ${usuario.email}!`);
        window.location.href = "home.html"; // Redireciona para tela principal
    } catch (error) {
        console.error("Erro no login:", error);
        if (error.code === "auth/user-not-found") {
            alert("Usuário não encontrado. Cadastre-se antes de fazer login!");
        } else if (error.code === "auth/wrong-password") {
            alert("Senha incorreta! Tente novamente.");
        } else {
            alert("Erro ao fazer login. Tente novamente mais tarde.");
        }
    } finally {
        document.getElementById("loading").style.display = "none"; // Ocultar indicador de carregamento
    }
});

// Função para logout do usuário
document.getElementById("logout").addEventListener("click", async () => {
    try {
        await auth.signOut();
        alert("Logout realizado com sucesso!");
        window.location.href = "index.html"; // Redireciona para página inicial
    } catch (error) {
        console.error("Erro ao sair:", error);
    }
});
