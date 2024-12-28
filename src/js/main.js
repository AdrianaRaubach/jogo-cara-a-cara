let gameIniciado = false;

function criarPersonagens (nome, altura, corCabelo, corOlhos, acessorios, idade) {
    const personagem = {
        nomePersonagem: nome,
        alturaPersonagem: altura,
        corCabeloPersonagem: corCabelo,
        corOlhosPersonagem: corOlhos,
        acessoriosPersonagem: acessorios,
        idadePersonagem: idade
    }
    return personagem
}

const personagem1 = criarPersonagens('André', 1.70, 'castanho', 'azul', 'óculos', 54) 
const personagem2 = criarPersonagens('Claudia', 1.72, 'branco', 'castanho', 'colar', 80)
const personagem3 = criarPersonagens('Erika', 1.30, 'castanho', 'verde', 'colar', 6)
const personagem4 = criarPersonagens('Felipe', 1.80, 'preto', 'casanho', 'sem acessórios', 18)
const personagem5 = criarPersonagens('Glauber', 1.60, 'castanho', 'verde', 'brinco', 16)
const personagem6 = criarPersonagens('Gustaf', 1.45, 'preto', 'castanho', 'colar', 10)
const personagem7 = criarPersonagens('Henry', 1.70, 'preto', 'castanho', 'óculos', 14)
const personagem8 = criarPersonagens('João', 1.88, 'castanho', 'azul', 'óculos', 15)
const personagem9 = criarPersonagens('Joaquim', 1.40, 'ruivo', 'verde', 'sem acessórios', 5)
const personagem10 = criarPersonagens('José', 1.75, 'branco', 'verde', 'óculos', 70)
const personagem11 = criarPersonagens('Julia', 1.65, 'loiro', 'azul', 'sem acessórios', 23)
const personagem12 = criarPersonagens('Kimberlly', 1.70, 'castanho', 'verde', 'óculos', 15)
const personagem13 = criarPersonagens('Marcia', 1.58, 'castanho', 'verde', 'colar', 25)
const personagem14 = criarPersonagens('Marina', 1.67, 'ruivo', 'castanho', 'colar', 28)
const personagem15 = criarPersonagens('Mikaela', 1.55, 'loiro', 'castanho', 'colar', 9)
const personagem16 = criarPersonagens('Neusa', 1.70, 'branco', 'castanho', 'sem acessórios', 75)
const personagem17 = criarPersonagens('Nicolas', 1.90, 'loiro', 'azul', 'sem acessórios', 25)
const personagem18 = criarPersonagens('Patricia', 1.74, 'castanho', 'castanho', 'óculos', 50)
const personagem19 = criarPersonagens('Violeta', 1.20, 'castanho', 'castanho', 'brincos', 5)
const personagem20 = criarPersonagens('Vitor', 1.50, 'branco', 'castanho', 'colar', 19)

function atribuirPersonagens() {
    for (let i = 1; i <= 20; i++) {
        const personagem = eval('personagem' + i); 

        document.getElementById('nome-' + i).innerHTML = personagem.nomePersonagem;
        document.getElementById('altura-' + i).innerHTML = personagem.alturaPersonagem;
        document.getElementById('cabelo-' + i).innerHTML = personagem.corCabeloPersonagem;
        document.getElementById('olhos-' + i).innerHTML = personagem.corOlhosPersonagem;
        document.getElementById('acessorio-' + i).innerHTML = personagem.acessoriosPersonagem;
        document.getElementById('idade-' + i).innerHTML = personagem.idadePersonagem;
    }
}
atribuirPersonagens()

function selecionarPersonagem(classe) {
    
    if (gameIniciado == false) {
        const personagemSelecionado = document.querySelector('.personagemSelecionado');
        
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove('personagemSelecionado');
        }

        const meuPersonagem = document.querySelector('.' + classe);

        if (meuPersonagem) {
            meuPersonagem.classList.add('personagemSelecionado');
        }
    }
}

function iniciarGame() {
    const personagemSelecionado = document.querySelector('.personagemSelecionado');
    
    if (personagemSelecionado) {
        const botoesAtivar = document.querySelectorAll('.eliminar');
        
        botoesAtivar.forEach(botao => {
            botao.classList.add('ativarBotoes');
        });
        gameIniciado = true;

        desbloquearSection2()
        sortearPersonagem()

    } else {
        alert('ATENÇÃO!! Você precisa selecionar um personagem antes de iniciar!')
    }
}

function eliminarPersonagem(classePersonagem) {
    const eliminar = document.querySelector('.' + classePersonagem);
    eliminar.classList.add('eliminado');
}

function desbloquearSection2() {
    const inicio = document.querySelector('.section-2');
    inicio.classList.add('desbloquear-section-2');  
}

function sortearPersonagem() {
    const personagemSorteado = Math.floor(Math.random()*20)
    console.log(personagemSorteado)
    const personagem = eval('personagem' + personagemSorteado);
    console.log(personagem.nomePersonagem)
}

//Olá, eu sou a Anna, eu já escolhi meu personagem também, então vamos jogar!!
//Você pode utilizar os campos abaixo para fazer perguntas sobre meu personagem e depois utilizar os botões de "Eliminar Personagem" quando tiver certeza que aquele não é o personagem correto!