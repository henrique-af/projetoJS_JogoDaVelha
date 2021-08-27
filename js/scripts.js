let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//click event box
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () { //computa o click 
        let elemento = checkElemento(player1, player2);

        if (this.childNodes.length == 0) { //verifica se tem x ou o
            let cloneElemento = elemento.cloneNode(true);
            this.appendChild(cloneElemento);
            if (player1 == player2) { //computando a jogada
                player1++;

                if (secondPlayer == "ia-jogador") {
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }
            CheckWin(); //check vitoria
        }
    });
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");

        for (y = 0; y < buttons.length; y++) {
            buttons[y].style.display = 'none';
        }

        setTimeout(function () {
            let container = document.querySelector('#container');
            container.classList.remove('hide')
        }, 250);
    });
}

function checkElemento(player1, player2) { //ver quem vai jogar
    if (player1 == player2) {
        elemento = x;
    } else {
        elemento = o;
    }
    return elemento;
}

function CheckWin() {
    let bloco1 = document.getElementById("block-1");
    let bloco2 = document.getElementById("block-2");
    let bloco3 = document.getElementById("block-3");
    let bloco4 = document.getElementById("block-4");
    let bloco5 = document.getElementById("block-5");
    let bloco6 = document.getElementById("block-6");
    let bloco7 = document.getElementById("block-7");
    let bloco8 = document.getElementById("block-8");
    let bloco9 = document.getElementById("block-9");

    if (bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length) {
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco2Child = bloco2.childNodes[0].className;
        let bloco3Child = bloco3.childNodes[0].className;

        if (bloco1Child == 'x' && bloco2Child == 'x' && bloco3Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco1Child == 'o' && bloco2Child == 'o' && bloco3Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }

    if (bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length) {
        let bloco4Child = bloco4.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco6Child = bloco6.childNodes[0].className;

        if (bloco4Child == 'x' && bloco5Child == 'x' && bloco6Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco4Child == 'o' && bloco5Child == 'o' && bloco6Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }
    if (bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length) {
        let bloco7Child = bloco7.childNodes[0].className;
        let bloco8Child = bloco8.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if (bloco7Child == 'x' && bloco8Child == 'x' && bloco9Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco7Child == 'o' && bloco8Child == 'o' && bloco9Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }
    if (bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length) {
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco4Child = bloco4.childNodes[0].className;
        let bloco7Child = bloco7.childNodes[0].className;

        if (bloco1Child == 'x' && bloco4Child == 'x' && bloco7Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco1Child == 'o' && bloco4Child == 'o' && bloco7Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }
    if (bloco2.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco8.childNodes.length) {
        let bloco2Child = bloco2.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco8Child = bloco8.childNodes[0].className;

        if (bloco2Child == 'x' && bloco5Child == 'x' && bloco8Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco2Child == 'o' && bloco5Child == 'o' && bloco8Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }
    if (bloco3.childNodes.length > 0 && bloco6.childNodes.length > 0 && bloco9.childNodes.length) {
        let bloco3Child = bloco3.childNodes[0].className;
        let bloco6Child = bloco6.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if (bloco3Child == 'x' && bloco6Child == 'x' && bloco9Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco3Child == 'o' && bloco6Child == 'o' && bloco9Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }
    if (bloco1.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco9.childNodes.length) {
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if (bloco1Child == 'x' && bloco5Child == 'x' && bloco9Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco1Child == 'o' && bloco5Child == 'o' && bloco9Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }
    if (bloco3.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco7.childNodes.length) {
        let bloco3Child = bloco3.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco7Child = bloco7.childNodes[0].className;

        if (bloco3Child == 'x' && bloco5Child == 'x' && bloco7Child == 'x') {
            //x venceu
            declareWinner('x');
        } else if (bloco3Child == 'o' && bloco5Child == 'o' && bloco7Child == 'o') {
            //o venceu
            declareWinner('o');
        }
    }

    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    if (counter == 9) {
        declareWinner('Ninguém venceu!');
    }

    function declareWinner(winner) {
        let scoreboardX = document.querySelector("#scoreboard-1");
        let scoreboardO = document.querySelector("#scoreboard-2");
        let msg = '';

        if (winner == 'x') {
            scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
            msg = 'O jogador 1 venceu!';
        } else if (winner == 'o') {
            scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
            msg = 'O jogador 2 venceu!'
        } else {
            msg = 'Ninguém venceu!';
        }

        setTimeout(function () {
            messageText.innerHTML = msg;
            messageContainer.classList.remove("hide");
        }, 250)
        setTimeout(function () {
            messageContainer.classList.add("hide");
            let boxesRemove = document.querySelectorAll(".box div");
            for (let i = 0; boxesRemove.length; i++) {
                boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
            }
        }, 2000);

        player1 = 0;
        player2 = 0;
    }
}

function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
    
    for (let i = 0; i < boxes.length; i++) {
        let randomN = Math.floor(Math.random() * 5);
        if (boxes[i].childNodes[0] == undefined) {
            if (randomN <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            filled++;
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlay();
    }
}