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
        this.setVisible = false;
        this.hiddenCards = [];
        this.shownCards = [];
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
        this.context.drawImage(this.images[this.type], this.column * size, this.row * size, 120, 120);
        this.setVisible = true;
        console.log(this.setVisible);
        // this.shownCards.push[this.type];
        // console.log(this.shownCards.push[this.type]);
        // this.shownCards.push(index);
        // console.log(this.shownCards);
    }

    hide(){
        this.setVisible = false;
        const SIZEX = 125;
        const SIZEY = 125;
        this.context.fillStyle ="#7BCCB5";
        for(let i=0; i<4; i++){
            for(let j=0; j<16; j++){
                this.context.fillRect(i*SIZEX, j*SIZEY, 120, 120);
            }
        }
        console.log(this.setVisible);
    }

    hideCard(index){
        const SIZEX = 125;
        const SIZEY = 125;
        this.context.fillStyle ="#7BCCB5";
        for(let i=0; i<4; i++){
            for(let j=0; j<16; j++){
                this.context.fillRect(index*SIZEX, index*SIZEY, 120, 120);
            }
        }
    }

    matchingCards(){
    window.addEventListener("mousedown", event =>{
        if (event.target.tagName === 'CANVAS'){
            if(this.hiddenCards.length === 0){
                // this.setVisible = false;
                this.hiddenCards.push(this);
            }else if(this.hiddenCards.length === 1){
                // this.setVisible = false;
                this.hiddenCards.push(this);
            }
        if(hiddenCards[0].types === this.hiddenCards[1].types){
            this.hiddenCards.length = 0;
        }else{
             this.hiddenCards[0].setVisible = true;
             this.hiddenCards[1].setVisible = true;
             this.hiddenCards.length = 0;
        }
    }
    });
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