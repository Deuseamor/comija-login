import { auth, db } from "./firebase/firebase.js";

// Função para cadastrar usuário no Firebase Authentication
const cadastrarUsuario = async (email, senha) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
        const usuario = userCredential.user;

        // Enviar e-mail de verificação
        await usuario.sendEmailVerification();
        console.log(`E-mail de verificação enviado para: ${email}`);

        // Aguarde a verificação antes de salvar no Firestore
        if (!usuario.emailVerified) {
            console.warn("Usuário precisa verificar o e-mail antes de salvar no banco.");
            return usuario;
        }

        // Salvar informações do usuário no Firestore
        await db.collection("usuarios").doc(usuario.uid).set({
            email: usuario.email,
            criadoEm: new Date(),
            verificado: usuario.emailVerified
        });

        return usuario;
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        
        // Mensagens mais claras
        if (error.code === "auth/email-already-in-use") {
            alert("Este e-mail já está cadastrado. Tente outro!");
        } else if (error.code === "auth/weak-password") {
            alert("Senha muito fraca. Use pelo menos 6 caracteres!");
        } else {
            alert("Erro ao cadastrar usuário. Tente novamente.");
        }

        throw error;
    }
};

// Exportar função para ser usada em outros arquivos
export { cadastrarUsuario };
