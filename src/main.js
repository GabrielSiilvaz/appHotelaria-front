import renderCadastroPage from "./pages/Cadastro.js";
import renderLoginPage from "./pages/login.js";

if (window.location.pathname.endsWith('Cadastro.html')) {
    renderCadastroPage();
}
else if (window.location.pathname.endsWith('login.html')) {
    renderLoginPage();
}