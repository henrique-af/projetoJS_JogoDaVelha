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
            } else {
                player2++;
            }
            CheckWin(); //check vitoria
        }
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

function CheckWin(){
    let bloco1 = document.querySelector("block-1");
    let bloco2 = document.querySelector("block-2");
    let bloco3 = document.querySelector("block-3");
    let bloco4 = document.querySelector("block-4");
    let bloco5 = document.querySelector("block-5");
    let bloco6 = document.querySelector("block-6");
    let bloco7 = document.querySelector("block-7");
    let bloco8 = document.querySelector("block-8");
    let bloco9 = document.querySelector("block-1");

//if (bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length)
};