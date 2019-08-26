const CARD_IMAGES = [
    Object.assign(new Image(), { src: "images/geez1.png" }),
    Object.assign(new Image(), { src: "images/geez2.png" }),
    Object.assign(new Image(), { src: "images/apla3.jpg" }),
    Object.assign(new Image(), { src: "images/q.png" }),
    Object.assign(new Image(), { src: "images/ethdesign.jpg" }),
    Object.assign(new Image(), { src: "images/ethalp.jpg" }),
    Object.assign(new Image(), { src: "images/apla2.jpg" }),
    Object.assign(new Image(), { src: "images/geeznumber.png" })
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
        this.context.drawImage(this.images[this.type], this.column * size, this.row * size, size, size);
        // if(this.col > 0 || this.row < 400){
        //     this.context.drawImage(this.images.geez1, this.col, this.row, 110, 110);
        //     this.context.drawImage(this.images.geez1, this.col*50, this.row*50, 110, 110);
        //     // this.context.drawImage(this.image, this.col + this.col, this.row + this.row, 90, 90);
            
        //     this.context.drawImage(this.images.geez2, this.col*30, this.row*30, 110, 110);
        //     this.context.drawImage(this.images.geez2, this.col*40, this.row*40, 110, 110);
        //     window.requestAnimationFrame(() => this.paint());
        // }
    }
   
}