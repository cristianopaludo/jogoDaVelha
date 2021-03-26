// criar o event listener pra checar qual quadrado foi clicado
document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square"); // pega todas divs
    
    // pra cada elemento clicado chama a função handlerClick
    squares.forEach((square) => {
        square.addEventListener('click', handlerClick);
    })
})

// criar a função do evento do clique para definir os seguintes passos:
// definir uma variável para receber o alvo do evento
// fazer com que cada vez que um quadrado é clicado o board receba através da função handleMove a posição como parâmetro
// chamar uma função que atualiza a interface do quadrado clicado

function handlerClick(event) {
    let square = event.target;
    let position = square.id;

    let winnerScreen = document.getElementById("winnerScreen");
    let winner = document.getElementById("winner");

    if (handleMove(position)) { // se o jogo acabar dispara um alerta depois de 10ms
        winnerScreen.style = "display: inline-block;"
        winner.className = symbols[playerTime];       
    }


    updateSquare(position);
}

//pra não atualizar todos os quadrados a cada clique:
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
}


function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol == '') { // se a posição do board não estiver vazia ele receberá tudo vazio
            square.innerHTML = `<div class="${symbol}"></div>`;
        }
    })

}

function playerTurn() {
    let pt = document.getElementById("playerTurn");
    turn = playerTime == 0 ? 1 : 0;
    pt.innerHTML =  `<div>Próximo a jogar:</div><div class="${symbols[turn]}"></div>`
}