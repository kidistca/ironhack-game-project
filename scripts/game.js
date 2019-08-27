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
        //  this.card = new Card(this);
        this.deck = [];
        this.types = [];
        this.row = 0;
        this.column = 0;

    }

    positionAlphabet(){
        const size = 4;
        for (let index = 0; index < (size * size) / 2; index++) {
            this.types.push(index);
            this.types.push(index);
        }
        const shuffled = arrayShuffle(this.types);
        this.deck = shuffled.map((type, index) => {
            this.row = Math.floor(index / 4);
            this.column = index % 4;
            // this.card = new Card(this, type, row, column);
            return new Card(this, type, this.row, this.column);
        });
        // console.log(type);
        
    }

    reset(){
        // const card = new Card();
        // this.card = new Card();
        // setTimeout(()=> {
            this.board.hide();
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
        for (let i = 0; i < this.deck.length; i++) {
            if(i===index){
            const card = this.deck[i];
            card.show(index);
            }
        }
        // const card = this.deck[index];
        // card.show(index);
        // return new Card(this, index, this.row, this.column);
           
        }
    
}