// =========================================================
// HOME | MENU MOBILE
// =========================================================

const menuButton = document.querySelector(".home-mobile-menu");
const nav = document.querySelector(".home-nav");
const headerActions = document.querySelector(".home-header-actions");

if (menuButton && nav && headerActions) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("home-nav-active");
        headerActions.classList.toggle("home-actions-active");

    });

}


// =========================================================
// HOME | MODO CLARO / ESCURO
// =========================================================

const lightButton = document.querySelector(".home-theme-light");
const darkButton = document.querySelector(".home-theme-dark");

if (lightButton) {

    lightButton.addEventListener("click", () => {

        document.body.classList.add("home-light-mode");

    });

}


if (darkButton) {

    darkButton.addEventListener("click", () => {

        document.body.classList.remove("home-light-mode");

    });

}

// =========================================================
// LOGIN | MODO CLARO / ESCURO
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const botoesTema = document.querySelectorAll(".login__tema");
    const temaSalvo = localStorage.getItem("bioclicky-tema");
 
    function atualizarTema(tema) {
        html.setAttribute("data-tema", tema);
        localStorage.setItem("bioclicky-tema", tema);
        botoesTema.forEach(botao => {
            botao.classList.toggle("ativo", botao.dataset.tema === tema);
        });
    }
 
    atualizarTema(temaSalvo === "escuro" ? "escuro" : "claro");
 
    botoesTema.forEach(botao => {
        botao.addEventListener("click", () => {
            atualizarTema(botao.dataset.tema);
        });
    });
 
    const senha = document.querySelector("#senha");
    const botaoSenha = document.querySelector("#mostrarSenha");
 
    botaoSenha.addEventListener("click", () => {
        const mostrar = senha.type === "password";
        senha.type = mostrar ? "text" : "password";
        botaoSenha.innerHTML = mostrar ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
        botaoSenha.setAttribute("aria-label", mostrar ? "Ocultar senha" : "Mostrar senha");
    });
});