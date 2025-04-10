document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;

    // Validação do número de telefone
    if (!validarNumero(telefone)) {
        alert("Número de telefone inválido! Insira um número correto.");
        return;
    }

    // Simulação de validação da senha (pode ser integrado a um banco de dados no futuro)
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    alert("Login realizado com sucesso!");
    window.location.href = "home.html"; // Redireciona para a tela principal
});

// Função para validar número de telefone (Brasil)
function validarNumero(numero) {
    const regex = /^[1-9]{2}[9]{1}[0-9]{8}$/; // Exemplo: 11999999999 (padrão brasileiro)
    return regex.test(numero);
}
