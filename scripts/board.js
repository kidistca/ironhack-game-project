class Board{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
       
    }
    //Checked
    paint (){
        const height = 500; 
        const width = 500;
        //vertical lines
        for (let x = 0; x <= width; x += 125) {
                this.context.beginPath();
                this.context.strokeStyle = "red";
                this.context.moveTo(x,0);
                this.context.lineTo(x, height);
                this.context.stroke();
                }
        //horizontal lines
        for (let y = 0; y <= height; y += 125) {
                this.context.beginPath();
                this.context.strokeStyle = "red";
                this.context.moveTo(0,y);
                this.context.lineTo(width, y);
                this.context.stroke();
                }
    }
    //checked
    boardHide(){
        const SIZEX = 125;
        const SIZEY = 125;
        this.context.fillStyle ="#7BCCB5";
        for(let i=0; i<4; i++){
            for(let j=0; j<16; j++){
                this.context.fillRect(i*SIZEX, j*SIZEY, 120, 120);
            }
        }
    }

    //THis makes sense but it is not working yet
    // hideCard(col,row){
    //     // console.log("hide" + index);
    //      const SIZE = 125;
    //      this.context.fillStyle ="#7BCCB5";
    //      this.context.fillStyle ="red";
    //      this.context.fillRect(col*SIZE, row*SIZE, 120, 120);
    //  }
}