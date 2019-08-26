class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.context = $canvas.getContext('2d');
        this.board = new Board(this);
    }
    paint (){
        this.board.paint();
    }
}