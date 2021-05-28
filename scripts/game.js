let board = ['','','','','','','','','']; // tabuleiro
let playerTime = 0; // vez do jogador
let gameOver = false; // se o jogo acabou 
let restartGame = false;
let isNewGame = false;
let isDraw = false;
let soundOn = true;
let count = 0;
let winnerSeq;
let symbols = ['o', 'x']; // marcação do jogador

let winStates = [ // mapeamento de cada estado de vitória
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];

// lógica de movimento que vai receber a posição do quadrado clicado na interface
function handleMove(position) {
    if (gameOver) { // imperdir que o jogo prossiga quando acabar
        return;
    }

    // antes de atribuir o simbolo ao board é preciso checar se ele está vazio
    if (board[position] == '') {
        board[position] = symbols[playerTime]; // de acordo com a vez do jogador irá ser preenchido ou um 'x' ou um 'o' na posição recebida pela função do handlerClick lá da interface

        // vefiricar depois da jogada ser executada se houve um vencedor
        if (isWin() || isDraw) {
            gameOver = true;
        }

        if (!gameOver) {
            playerTurn();
        }
        playerTime = playerTime == 0 ? 1 : 0;
    } else {
        playAudio(soundError);
    }

    return gameOver;
}

// verifica se houve um vencedor de acordo com o mapeamento
function isWin() {
    for (i in winStates) {
        let seq = winStates[i];

        pos1 = seq[0];
        pos2 = seq[1];
        pos3 = seq[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            winnerSeq = seq;
            updateScore();
            updateSquares();
            return true;
        } 
    
    }

    count++;

    if (count == 9) {
        isDraw = true;
    }

    return false;
}


function restart() {
    restartGame = true;
    board = ['','','','','','','','','']; // zera o tabuleiro
    roundCount(); // atualiza o número de rodadas
    gameOver = false; // volta a permitir movimentos 
    playerTurn();
    isDraw = false;
    count = 0;
    updateSquares(); // atualiza a interface do tabuleiro
    playAudio(soundClick);
    restartGame = false; // desativa o restartGame mode
}

function newGame() {
    isNewGame = true;
    restart();
    updateScore();
    editName();
    isNewGame = false;
}
