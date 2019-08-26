const arrayShuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ array[i], array[j]] = [ array[j], array[i] ];
    }
    return array;
};

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.board = new Board(this);
        this.deck = [];
    }

    positionAlphabet(){
        const size = 4;
        const types = [];
        for (let index = 0; index < (size * size) / 2; index++) {
            types.push(index);
            types.push(index);
        }
        const shuffled = arrayShuffle(types);
        this.deck = shuffled.map((type, index) => {
            let row = Math.floor(index / 4);
            let column = index % 4;
            return new Card(this, type, row, column);
        });
    }

    reset(){
        
    }

    click(){
        this.canvas.addEventListener('mousedown', function (e) {
            let parentX = 0;
            let parentY = 0;
            let obj = this.canvas;
            while (obj) {
                parentX += obj.offsetLeft;
                parentY += obj.offsetTop;
                obj = obj.offsetParent;
            } 
            //onClick(e.clientX - parentX, e.clientY - parentY);
        }, false);
   
}

    clear(){
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
    }

    paint (){
        this.board.paint();
        for (let index = 0; index < this.deck.length; index++) {
            const card = this.deck[index];
            card.paint();
        }
    }
}