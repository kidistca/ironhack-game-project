class Board{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        // this.height = this.context.height;
        // this.width = this.context.width;
        
    }
    paint (){
        const height = 500; 
        const width = 500;
        // console.log(this.canvas.height);
        //vertical lines
        for (let x = 0; x <= width; x += 125) {
                this.context.beginPath();
                this.context.moveTo(x,0);
                this.context.lineTo(x, height);
                this.context.stroke();
                }
        //horizontal lines
        for (let y = 0; y <= height; y += 125) {
                this.context.beginPath();
                this.context.moveTo(0,y);
                this.context.lineTo(width, y);
                this.context.stroke();
                }
    }

}