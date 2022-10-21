/*
OBJETIVO 1 - Quando passar o mouse por cima do personagem temos que:

    -Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionarmos a animação nele 
    -Retirar a classe selecionado no personagem que estava selecionado

OBJETIVO 2 - Trocar a imagem e nome do personagem grande

    -Alterar imagem do jogador 1
    -Alterar o nome do jogador 1   
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value;
        
        if (idSelecionado === 'ultron') {
            return;
        }

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado'); 

        const imagemjogador1 = document.getElementById('personagem-jogador-1');
        imagemjogador1.src = `src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})