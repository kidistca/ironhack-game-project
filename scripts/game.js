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
        this.control = new Control(this);
        this.deck = [];
        this.types = [];

    }

    positionAlphabet(){
        const size = 4;
        for (let index = 0; index < (size * size) / 2; index++) {
            this.types.push(index);
            this.types.push(index);
        }
        const shuffled = arrayShuffle(this.types);
        this.deck = shuffled.map((type, index) => {
            let row = Math.floor(index / 4);
            let column = index % 4;
            return new Card(this, type, row, column);
        });
        // console.log(this.types);
        
    }

    reset(){
        // this.card = new Card();
        // setTimeout(()=> {
            this.board.hide()
        //   }, 4000);
        
    }

    getPosition(){
        // this.control = new Control();
        this.control.getposition(this.types);
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

    show(index){
        this.board.show();
        const card = this.deck[index];
        card.paint();
        
    }
}