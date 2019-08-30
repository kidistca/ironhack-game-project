const CARD_IMAGES = [
    Object.assign(new Image(), { src: "images/geez1.png", soundSrc: ""}),
    Object.assign(new Image(), { src: "images/geez2.png", soundSrc: ""}),
    Object.assign(new Image(), { src: "images/geez3.png", soundSrc: "" }),
    Object.assign(new Image(), { src: "images/geez4.png", soundSrc: "" }),
    Object.assign(new Image(), { src: "images/geez5.png", soundSrc: "" }),
    Object.assign(new Image(), { src: "images/geez6.png", soundSrc: "" }),
    Object.assign(new Image(), { src: "images/geez7.png", soundSrc: "" }),
    Object.assign(new Image(), { src: "images/geez8.png", soundSrc: "" }),
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
    
    // Checked
    paint() {
        const canvas = this.game.canvas;
        const size = canvas.width / 4; 
        this.context.drawImage(this.images[this.type], this.column * size, this.row * size, 120, 120);
        
    }

    hideCard(){
         const SIZE = 125;
         this.context.fillStyle ="#7BCCB5";
         this.context.fillRect(this.column*SIZE, this.row*SIZE, 120, 120);
     }
}