document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Validação dos dados do usuário
    if (nome.length < 3) {
        alert("Seu nome precisa ter pelo menos 3 caracteres!");
        return;
    }

    if (!validarEmail(email)) {
        alert("E-mail inválido! Digite um e-mail correto.");
        return;
    }

    if (senha.length < 6) {
        alert("Sua senha precisa ter pelo menos 6 caracteres!");
        return;
    }

    alert("Cadastro realizado com sucesso! Agora faça login.");
    window.location.href = "../login/index.html"; // Redireciona para login
});

// Função para validar e-mail
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
