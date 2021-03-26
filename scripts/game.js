let board = ['','','','','','','','','']; // tabuleiro
let playerTime = 0; // vez do jogador
let gameOver = false;
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
        gameOver = isWin();

        if (!gameOver) {
            // programar a vez do player
            // if (playerTime == 0) {
            //     playerTime = 1;
            // } else {
            //     playerTime = 0;
            // }
            playerTurn();
            playerTime = playerTime == 0 ? 1 : 0; // opção ternária
        }

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
            return true;
        }
    }

    return false;
}

function restart() {
    board = ['','','','','','','','','']; // zera o tabuleiro
    playerTime = 0; // zera a vez do jogador
    gameOver = false; // volta a permitir movimentos
    updateSquares(); // atualiza a interface do tabuleiro
}