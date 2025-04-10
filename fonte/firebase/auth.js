// Funções de autenticação com Firebase
const cadastrarUsuario = (email, senha) => {
    return auth.createUserWithEmailAndPassword(email, senha)
        .then(userCredential => {
            return userCredential.user;
        })
        .catch(error => {
            console.error("Erro no cadastro:", error);
        });
};

const fazerLogin = (email, senha) => {
    return auth.signInWithEmailAndPassword(email, senha)
        .then(userCredential => {
            return userCredential.user;
        })
        .catch(error => {
            console.error("Erro no login:", error);
        });
};

const sairUsuario = () => {
    return auth.signOut()
        .then(() => {
            console.log("Usuário saiu.");
        })
        .catch(error => {
            console.error("Erro ao sair:", error);
        });
};

// Exportar funções para serem usadas em cadastro.js e login.js
export { cadastrarUsuario, fazerLogin, sairUsuario };
