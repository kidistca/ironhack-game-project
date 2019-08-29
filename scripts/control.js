class Control {
    constructor(game) {
        this.game = game;
        this.context = this.game.context;
        this.shownCards = [];
        this.previousIndex = "";
        this.setVisible = false;
        this.score = 0;
        this.index = "";
        this.image = new Image();
        this.image.src = "./images/clap.jpg";
        this.imageloss = new Image();
        this.imageloss.src = "./images/lost.png";
    }

    getposition(types) {
        window.addEventListener("mousedown", event => {
         if (event.target.tagName === 'CANVAS') {
                let x = event.x - this.game.canvas.offsetLeft;
                let y = event.y- this.game.canvas.offsetTop;
                const row = Math.floor(y / 125);
                const col = Math.floor(x / 125);
                this.index = col + Math.floor(row * 4);
                this.game.show(this.index);
                this.flipCard(types);
         }
         });
        }

    //Comparing if two flipped cards are matching or non-matching 
     flipCard(types){ 
         console.log(types); 
         console.log(this.index); 
                if (this.shownCards.length === 0) {
                    this.previousIndex = this.index;
                    this.shownCards.push(types[this.index]);
                    this.setVisible = true;
                } else if (this.shownCards.length === 1 && this.index !== this.previousIndex) {
                        this.shownCards.push(types[this.index]);
                        this.setVisible = true;
                   
                    if (this.shownCards.length === 2) {
                        if (this.shownCards[0] === this.shownCards[1]) {
                            this.shownCards.length = 0;
                            // if(this.setVisible === true){
                                this.score += 100;
                            // }else{
                            //     this.score = this.score;
                            // }

                        } else if (this.shownCards[0] !== this.shownCards[1]) {
                            // this.game.hideCard(this.previousIndex);
                            // this.game.hideCard(this.index);
                            this.shownCards.length = 0;
                                this.score -= 100;

                            // if(this.setVisible === true){
                            //     this.score -= 100;
                            // }else{
                            //     this.score = this.score;
                            // }

                        }
                        if (this.score < 0) {
                            document.getElementById("scorebtn").style.color = "red";
                        }
                        document.getElementById("scorebtn").innerText = "ውጤት : " + this.score;
                    }
                }
                
            }
     wonLost(){
        if(this.score >= 100){
            this.context.clearRect(0,0, 500, 500);
            console.log("you won");
            this.context.drawImage(this.image, 0, 0, 500, 500);
            this.game.sound.play('congratulations', { volume: 1 });

            //  window.requestAnimationFrame();
           } 
        //  else{
        //     console.log("You Lost");
        //     this.context.drawImage(this.imageloss, 0, 0, 500, 500);
        //     // this.game.sound.play('lost', { volume: 1 });
        //  }
        //     window.requestAnimationFrame(() => this.wonLost());
           
     }       
}
