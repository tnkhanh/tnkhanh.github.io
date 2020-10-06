let fen = document.getElementById('fen');
let newFen = document.getElementById('new-fen');
let board = document.getElementById('board');
let fenStr= 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
let info = document.getElementById('info');
let fenButton = document.getElementById('new-fen-button');

function setBoard() {
    fen.value = fenStr;
    board.innerHTML = '';

    let y = 8, x = 1;

    for (let i = 0; i < fenStr.length; i++) {
        let c = fenStr[i];
        if (c >= '1' && c <='8') {
            x+=parseInt(c);
            if (x===9) {
                y--;
                x = 1;
            }
        } else
        if ((c>='a' && c<='z') || (c>='A' && c<='Z')) {
            let piece = document.createElement('div');
            let color = c <='Z' ? 'w' : 'b';
            c = c.toLowerCase();
            piece.classList.add('piece');
            piece.innerHTML = ''.concat('<img class="piece-img" src="img/', color, c, '80.png">');
            piece.style.transform = ''.concat('translate(',x-1,'00%,',1-y,'00%)');
            board.appendChild(piece);

            x++;
            if (x===9) {
                y--;
                x = 1;
            }
        }

        if (y===0) break;
    }
}

setBoard();

fenButton.addEventListener('click', function(){
    fenStr = newFen.value;
    setBoard();
});

let control = document.getElementById('control');
control.addEventListener('keyup', function(ev){
});

let game = document.getElementById('game');
let submitted = document.getElementById('submitted');
game.addEventListener('change', function() {
    let request = new XMLHttpRequest();
    console.log('File: ' + game.files[0].name);
    request.open('GET', URL.createObjectURL(game.files[0]), true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        submitted.value = this.response;
      } else {
        submitted.value = 'Not Found!';
      }
    };

    request.onerror = function() {
        submitted.value = 'Cannot connect!';
    };

    request.send();   
});


let loadButton = document.getElementById('load-button');
let fenList = document.getElementById('fenlist');
let fens = [];
let nFens = 0, current = 0;
loadButton.addEventListener('click', function() {
    let request = new XMLHttpRequest();
    request.open('POST', '/cgi-bin/analysis');

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        fenList.innerHTML = this.response;
        fens = this.response.split("\n");
        nFens = fens.length;
        current = 0;
        fenStr = fens[0];
        setBoard();
      } else {
        fenList.innerHTML = 'Not Found!';
      }
    };

    request.onerror = function() {
        fenList.innerHTML = 'Cannot connect!';
    };

    request.send(submitted.value);
});


let panel = document.getElementById('panel');
let left = document.getElementById('left-arrow');
let right = document.getElementById('right-arrow');

left.style.color='dimgrey';
right.style.color='dimgrey';
document.addEventListener('keydown', function(ev){
    if (nFens===0) return true;
    if (ev.code==="ArrowLeft") {
        left.style.color='purple';
        current--;
        if (current < 0) current = 0;

        if (fens[current]==='') current++;
        else {
            fenStr = fens[current];
            setBoard();
        }
   } else
    if (ev.code==="ArrowRight") {
        right.style.color='purple';
        current++;
        if (current >= nFens) current = nFens - 1;

        if (fens[current]==='**') current--;
        else {
            fenStr = fens[current];
            setBoard();
        }
   }
});

document.addEventListener('keyup', function(ev) {
    if (ev.code==="ArrowLeft") {
        left.style.color='dimgrey';
    } else
    if (ev.code==="ArrowRight") {
        right.style.color='dimgrey';
    }
});

