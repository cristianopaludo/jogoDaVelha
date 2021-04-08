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

    let pt = document.getElementById("playerTurn");
    

    if (handleMove(position)) { // se o jogo acabar dispara um alerta depois de 10ms
        let resultScreen = document.getElementById("resultScreen");
        let winner = document.getElementById("winner");
        let closeResultScreen = document.getElementById("closeResultScreen");
        let result = document.getElementById("result");

        if (isDraw) {
            result.innerText = "DEU VELHA!:";
            winner.style = "display: none;";

        } else {
            result.innerText = "VENCEDOR:";
            winner.style = "display: block;";
        }


        resultScreen.style = "display: flex;"
        winner.className = symbols[playerTime];
        resetScreen();

        closeResultScreen.addEventListener('click', () => {
            pt.innerHTML = '';
            resultScreen.style = "display: none;";
            alert
        }) 

        setTimeout(() => {
            pt.innerHTML = '';
            resultScreen.style = "display: none;";
        }, 10000)
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
    pt.innerHTML =  `<div>Quem joga:</div><div class="${symbols[turn]}"></div>`

    if (gameOver || restartGame || isNewGame) {
        pt.innerHTML =  `<div>Quem joga:</div><div class="o"></div>`
    }

}

function updateScore() {
    let player1 = document.getElementById("num-p1");
    let player2 = document.getElementById("num-p2");
    let p1 = parseInt(player1.innerText);
    let p2 = parseInt(player2.innerText);
    if (isNewGame) {
        player1.innerText = 0;
        player2.innerText = 0;
    } else if (isWin && playerTime == 0) {
        p1 ++
        player1.innerText = p1;
    } else if (isWin && playerTime == 1) {
        p2 ++
        player2.innerText = p2;
    }
}

function resetScreen() { // após da vitória/empate, a tela volta ao normal
    let pt = document.getElementById("playerTurn");
    pt.innerHTML =  `<div>Quem joga:</div><div class="${symbols[turn]}"></div>`
}

function closeScreen() {
    let display = document.getElementById("closeScreen");

}