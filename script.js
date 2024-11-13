document.addEventListener("DOMContentLoaded", function () {
    var logado = false; // Inicialmente o usuário não está logado

    // Referências aos elementos
    var btnLogin = document.getElementById('botao-login');
    var logoutButton = document.getElementById('logoutButton');
    var loginEmail = document.getElementById('loginEmail');
    var loginPassword = document.getElementById('loginPassword');
    var loginBtn = document.getElementById('loginBtn');


    // Função para realizar o login
    function login() {
        var email = loginEmail.value.trim();
        var senha = loginPassword.value.trim();

        // Verificação de login (login de exemplo com admin/admin)
        if (email === "admin" && senha === "admin") {
            logado = true;
            alert("Login bem-sucedido!"); // Pode ser removido ou ajustado conforme necessário
            
            // Fechar o modal após o login bem-sucedido
            var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
            myModal.hide();  // Este comando fecha o modal

            // Limpar os campos de email e senha
            loginEmail.value = ''; // Limpa o campo de email
            loginPassword.value = ''; // Limpa o campo de senha

            // Atualizando a UI conforme o estado de login
            updateUI();
        } else {
            alert("Email ou senha incorretos! Tente novamente.");
        }
    }

    // Função para atualizar a interface conforme o estado de login
    function updateUI() {
        if (logado) {
            // Exibindo o botão "Perfil" e escondendo o "Login"
            btnLogin.style.display = 'none';
            logoutButton.style.display = 'inline-block'; // Exibindo o botão de logout
        } else {
            // Ocultando o botão "Perfil" e exibindo o "Login"
    
            btnLogin.style.display = 'inline-block';
            logoutButton.style.display = 'none'; // Ocultando o botão de logout
        }
    }

    // Função para realizar o logout
    function logout() {
        logado = false; // Definindo o estado como deslogado
        updateUI(); // Atualizando a interface após o logout
        alert("Você foi deslogado!");
    }

    // Associando o evento de click ao botão de login
    loginBtn.addEventListener('click', login);

    // Associando o evento de click ao botão de logout
    logoutButton.addEventListener('click', logout);

    // Inicializando a UI de acordo com o estado de login
    updateUI();
});
