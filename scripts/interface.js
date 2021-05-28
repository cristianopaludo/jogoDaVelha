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
function handlerClick(event) {
    let square = event.target;
    let position = square.id;

    let pt = document.getElementById("playerTurn");
    if (handleMove(position)) {
        let resultScreen = document.getElementById("resultScreen");
        let winner = document.getElementById("winner");
        let closeResultScreen = document.getElementById("closeResultScreen");
        let result = document.getElementById("result");
        let soundWin = document.getElementById("soundWin");
        
        

        if (isDraw) {
            result.innerText = "DEU VELHA!:";
            winner.style = "display: none;";
            playAudio(soundDraw);
        } else {
            result.innerText = "VENCEDOR:";
            winner.style = "display: block;";
            playAudio(soundWin);
        }



        resultScreen.style = "display: flex;"
        
        if (playerTime == 0) { // ao contrário porque a vez do jogador vai atualizar já pra próxima rodada
            winner.className = symbols[1];
        } else {
            winner.className = symbols[0];
        }
        resetScreen();

        closeResultScreen.addEventListener('click', () => {
            pt.innerHTML = '';
            resultScreen.style = "display: none;";
        }) 
    }

    // chamar uma função que atualiza a interface do quadrado clicado
    updateSquare(position);

    // após a primeira jogada, alterar o botão de editar nome
    if (count == 1) {
        editName();
    }

    // chamar o evento do audio
    if (playerTime == 0) {
            playAudio(soundP1);
        } else if (playerTime == 1) {
            playAudio(soundP2);
        }
}


//pra não atualizar todos os quadrados a cada clique:
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
}

// fazer com que cada vez que um quadrado é clicado o board receba através da função handleMove a posição como parâmetro
function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol == '') { // se a posição do board não estiver vazia ele receberá tudo vazio
            square.innerHTML = `<div class="${symbol}"></div>`;
        }
        
        // winner's square animation
        for (pos in winnerSeq) {
            if (isWin && winnerSeq[pos] == position) {
                square.style = "border-color: tomato;"
            } 
        }
        // reset animation
        if (restartGame) {
            square.style = "border-color: #101010;"
        }
    })
}

function roundCount() {
    let roundCount = document.getElementById("roundCount");
    rCount = parseInt(roundCount.innerText);
    if (gameOver) {
        rCount++;
        roundCount.innerText = rCount;
    }

    if (isNewGame) {
        rCount = 1;
        roundCount.innerText = rCount;
    }
}

function playerTurn() {
    let pt = document.getElementById("playerTurn");
    turn = playerTime == 0 ? 1 : 0;
    pt.innerHTML =  `<div>Quem joga:</div><div class="${symbols[turn]}"></div>`

    if (gameOver || restartGame || isNewGame) {
        pt.innerHTML =  `<div>Quem joga:</div><div class="${symbols[playerTime]}"></div>`
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

function editName(player) {
    if (player) {
        let roundCount = document.getElementById("roundCount");
        rCount = parseInt(roundCount.innerText);
        let id = player.id
        let name = player.children[0].innerHTML
        playAudio(soundBtn);
        if (rCount == 1 && count == 0) {
            player.style = "justify-content: space-around;"

            player.innerHTML = `<input type="text" id="input-${id}" class="input-name" placeholder="Nome" maxlength="10">
            <input id='btn-confirm-${id}' class="btn-icons btn-confirm" type="button"></input>`

            let inputField = player.children[0]
            let confirmBtn = player.children[1]

            inputField.focus()

            inputField.addEventListener('keyup', function(event) {
                if (event.keyCode === 13) {
                    confirmBtn.click()
                }
            })

            confirmBtn.addEventListener('click', () => {
                player.style = "justify-content: center;"
                if (inputField.value == '') {
                    inputField.value = name
                }
                player.innerHTML = `<div id="${player.id}">${inputField.value}</div>
                <button id="btn-edit-${player.id}" class="btn-icons btn-edit" onclick="editName(document.getElementById('${player.id}'))"></button>`
                playAudio(soundBtn);
            })
        }
    } else {
        let allPlayers = document.querySelectorAll('.btn-edit')
        allPlayers.forEach((div) => {
            div.style = "background-image: url('../images/edit-icon-hex757575.png');"

            if (isNewGame) {
                div.style = "background-image: url('../images/edit-icon-tomato.png');"
            }
        })
    }
}

function playAudio(audioName) {
    // tocar o som
    if (audioName && soundOn) {
        let audio = document.getElementById(`${audioName.id}`)
        return audio.play();
    }  
}

function muteBtn() {
    // colocar/tirar do mudo
    let muteBtn = document.getElementById("audio");
    if (soundOn) {
        muteBtn.style = "background-image: url('../images/audio-muted-icon-tomato.png');"
        soundOn = false;
    } else {
        muteBtn.style = "background-image: url('../images/audio-icon-seagreen.png');"
        soundOn = true;
    }
}