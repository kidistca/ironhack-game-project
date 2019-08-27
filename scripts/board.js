// const CARD_IMAGES1 = [
//     Object.assign(new Image(), { src: "images/geez1.png" }),
//     Object.assign(new Image(), { src: "images/geez2.png" }),
//     Object.assign(new Image(), { src: "images/geez3.png" }),
//     Object.assign(new Image(), { src: "images/geez4.png" }),
//     Object.assign(new Image(), { src: "images/geez5.png" }),
//     Object.assign(new Image(), { src: "images/geez6.png" }),
//     Object.assign(new Image(), { src: "images/geez7.png" }),
//     Object.assign(new Image(), { src: "images/geez8.png" }),
// ];
class Board{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        // this.images = CARD_IMAGES1;
        // this.height = this.context.height;
        // this.width = this.context.width;
        
    }
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
  
    hide(){
        const SIZEX = 125;
        const SIZEY = 125;
        this.context.fillStyle ="#7BCCB5";
        for(let i=0; i<4; i++){
            for(let j=0; j<16; j++){
                this.context.fillRect(i*SIZEX, j*SIZEY, 120, 120);
        }
    }
}


}