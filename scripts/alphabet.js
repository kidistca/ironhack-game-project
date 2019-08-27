const CARD_IMAGES = [
    Object.assign(new Image(), { src: "images/geez1.png" }),
    Object.assign(new Image(), { src: "images/geez2.png" }),
    Object.assign(new Image(), { src: "images/geez3.png" }),
    Object.assign(new Image(), { src: "images/geez4.png" }),
    Object.assign(new Image(), { src: "images/geez5.png" }),
    Object.assign(new Image(), { src: "images/geez6.png" }),
    Object.assign(new Image(), { src: "images/geez7.png" }),
    Object.assign(new Image(), { src: "images/geez8.png" }),
];

class Card {
    constructor(game, type, row, column){
        this.game = game;
        this.context = this.game.context;
        this.images = CARD_IMAGES;
        this.type = type;
        this.row = row;
        this.column = column;
    }
    
    paint() {
        const canvas = this.game.canvas;
        const size = canvas.width / 4; 
        this.context.drawImage(this.images[this.type], this.column * size, this.row * size, 120, 120);
        // this.context.drawImage(this.images[this.type], this.column * size, this.row * size, size, size);
       
    }

    show(index){
        console.log(index);
        const canvas = this.game.canvas;
        const size = canvas.width / 4; 
        // if(index === this.type){
        this.context.drawImage(this.images[this.type], this.column * size, this.row * size, 120, 120);
    // }
}
    matchingCards(){

    }

    // hide(){
    //     const SIZEX = 125;
    //     const SIZEY = 125;
    //     this.context.fillStyle ="#7BCCB5";
    //     for(let i=0; i<4; i++){
    //         for(let j=0; j<16; j++){
    //             this.context.fillRect(i*SIZEX, j*SIZEY, 120, 120);
    //     }
    // }
    // }
   
}