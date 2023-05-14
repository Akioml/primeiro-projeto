const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemAlterarBotao = document.querySelector(".imagem-botao");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemAlterarBotao.setAttribute("src", "./SRC/img/sun.png" )
    } else {
        imagemAlterarBotao.setAttribute("src", "./SRC/img/moon.png");

    }

});