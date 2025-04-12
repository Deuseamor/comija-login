// Banco de dados SIMULADO (armazena no localStorage)
const db = {
  usuarios: JSON.parse(localStorage.getItem('usuarios')) || [],

  salvar: function() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }
};

// Funções de Autenticação
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  
  const usuario = db.usuarios.find(u => u.email === email && u.senha === senha);
  
  if (usuario) {
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    window.location.href = "home.html";
  } else {
    alert("E-mail ou senha incorretos!");
  }
}

function cadastrar() {
  const usuario = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value
  };

  if (db.usuarios.some(u => u.email === usuario.email)) {
    alert("E-mail já cadastrado!");
  } else {
    db.usuarios.push(usuario);
    db.salvar();
    alert("Cadastro realizado! Faça login.");
    window.location.href = "index.html";
  }
}

// Verifica se está logado ao acessar a home
function verificarLogin() {
  if (!localStorage.getItem('usuarioLogado')) {
    window.location.href = "index.html";
  }
}
