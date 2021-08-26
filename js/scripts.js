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

function CheckWin() {
    let bloco1 = document.querySelector("block-1");
    let bloco2 = document.querySelector("block-2");
    let bloco3 = document.querySelector("block-3");
    let bloco4 = document.querySelector("block-4");
    let bloco5 = document.querySelector("block-5");
    let bloco6 = document.querySelector("block-6");
    let bloco7 = document.querySelector("block-7");
    let bloco8 = document.querySelector("block-8");
    let bloco9 = document.querySelector("block-9");

    if (bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length) {
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco2Child = bloco2.childNodes[0].className;
        let bloco3Child = bloco3.childNodes[0].className;

        if (bloco1Child == 'x' && bloco2Child == 'x' && bloco3Child == 'x') {
            //x venceu
            alert('X venceu!');
        } else if (bloco1Child == 'o' && bloco2Child == 'o' && bloco3Child == 'o') {
            //o venceu
            alert('Y venceu!')
        }
    }

    if (bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length) {
        let bloco4Child = bloco4.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco6Child = bloco6.childNodes[0].className;

        if (bloco4Child == 'x' && bloco5Child == 'x' && bloco6Child == 'x') {
            //x venceu
            alert('X venceu!');
        } else if (bloco4Child == 'o' && bloco5Child == 'o' && bloco6Child == 'o') {
            //o venceu
            alert('Y venceu!')
        }
    }
    if (bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length) {
        let bloco7Child = bloco7.childNodes[0].className;
        let bloco8Child = bloco8.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if (bloco7Child == 'x' && bloco8Child == 'x' && bloco9Child == 'x') {
            //x venceu
            alert('X venceu!');
        } else if (bloco7Child == 'o' && bloco8Child == 'o' && bloco9Child == 'o') {
            //o venceu
            alert('Y venceu!')
        }
    }
    if (bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length) {
        let bloco1Child = bloco1.childNodes[0].className;
        let bloco4Child = bloco4.childNodes[0].className;
        let bloco7Child = bloco7.childNodes[0].className;

        if (bloco1Child == 'x' && bloco4Child == 'x' && bloco7Child == 'x') {
            //x venceu
            alert('X venceu!');
        } else if (bloco1Child == 'o' && bloco4Child == 'o' && bloco7Child == 'o') {
            //o venceu
            alert('Y venceu!')
        }
    }

};