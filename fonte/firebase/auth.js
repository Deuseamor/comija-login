import { auth } from "./firebase/firebase.js";

// Função para cadastrar usuário no Firebase Authentication
const cadastrarUsuario = async (email, senha) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
        const usuario = userCredential.user;

        await usuario.sendEmailVerification();
        console.log(`E-mail de verificação enviado para: ${email}`);

        return usuario;
    } catch (error) {
        console.error("Erro no cadastro:", error);
        if (error.code === "auth/email-already-in-use") {
            throw new Error("Este e-mail já está cadastrado. Tente outro!");
        } else if (error.code === "auth/weak-password") {
            throw new Error("Senha muito fraca. Use pelo menos 6 caracteres!");
        } else {
            throw new Error("Erro ao cadastrar usuário. Tente novamente.");
        }
    }
};

// Função para fazer login no Firebase Authentication
const fazerLogin = async (email, senha) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, senha);
        const usuario = userCredential.user;

        if (!usuario.emailVerified) {
            throw new Error("Verifique seu e-mail antes de fazer login!");
        }

        console.log(`Usuário autenticado: ${usuario.email}`);
        return usuario;
    } catch (error) {
        console.error("Erro no login:", error);
        if (error.code === "auth/user-not-found") {
            throw new Error("Usuário não encontrado. Cadastre-se antes de fazer login!");
        } else if (error.code === "auth/wrong-password") {
            throw new Error("Senha incorreta! Tente novamente.");
        } else {
            throw new Error("Erro ao fazer login. Tente novamente mais tarde.");
        }
    }
};

// Função para logout do usuário
const sairUsuario = async () => {
    try {
        await auth.signOut();
        console.log("Usuário saiu.");
    } catch (error) {
        console.error("Erro ao sair:", error);
        throw new Error("Erro ao sair da conta. Tente novamente.");
    }
};

// Exportar funções para serem usadas em cadastro.js e login.js
export { cadastrarUsuario, fazerLogin, sairUsuario };
