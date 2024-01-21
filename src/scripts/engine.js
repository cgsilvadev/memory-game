/* Array emojis. */
const emojis = [
    "🐰",
    "🐰",
    "🐯",
    "🐯",
    "🐵",
    "🐵",
    "🐶",
    "🐶",
    "🐷",
    "🐷",
    "🐸",
    "🐸",
    "🐮",
    "🐮",
    "🐹",
    "🐹",
];

/* Array cards abertos. */
let openCards = [];

/*
 Embaralha os cards do array emojis e atribui a variável. Sorteia um número com a biblioteca JavaScript 'Math' e utiliza o operador ternário para verificar se o número sorteado é maior que 0.5. Sendo maior atribui 2 senão atribui -1. Isso ordenará os emojis com -1 antes dos emojis com 2. 
*/
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

/* Adiciona os emojis na página. */
for(let i = 0; i < emojis.length; i++){

    /* Cria um elemento div */
    let box = document.createElement("div");

    /* Adiciona a classe item no elemento div criado dinamicamente. */
    box.className = "item";

    /* Adiciona internamente no elemento div criado os emojis classificados aleatoriamente. */
    box.innerHTML = shuffleEmojis[i];

    /* Adiciona no elemento pai o elemento div criado dinamicamente. */
    document.querySelector(".game").appendChild(box);

    /* Invoca uma função quando o card é clicado. */
    box.onclick = handleClick;
}
/* Adiciona os cards no array de cards abertos e invoca a função de verificação de matches.*/
function handleClick(){
    if(openCards.length < 2){

        /* Adiciona a classe 'boxOpen' no card aberto. */
        this.classList.add("boxOpen");

        /* Adiciona o card aberto no array 'openCards'. */
        openCards.push(this);
    }
    
    if(openCards.length == 2){
        /* Invoca a função de verificação de match dos cards abertos. */
        setTimeout(checkMatch, 500);
    }
}
/* Verifica condição de combinação dos cards */
function checkMatch(){
    
    /* Compara o card do primeiro índice do array com o card do segundo índice */
    if(openCards[0].innerHTML === openCards[1].innerHTML){

        /* Adiciona a classe boxMatch aos cards se forem iguais. */
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");

    } else {

        /* Remove a classe boxOpen se forem diferentes. */
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    
    /* Limpa o array de cards abertos. */
    openCards = [];

    /* Verifica se o array de cards abertos tem o mesmo tamanho do array de emojis. */
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("You wins!")
    }
}
