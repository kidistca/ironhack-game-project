class Control {
    constructor(game) {
        this.game = game;
        this.context = this.game.context;
        this.shownCards = [];
        this.collectedCards = [];
        this.previousIndex = "";
        this.setVisible = false;
        this.score = 0;
        this.index = "";
        this.image = new Image();
        this.image.src = "./images/clap.jpg";
        this.imagelost = new Image();
        this.imagelost.src = "./images/lost.png";
    }

    getposition(types) {
        window.addEventListener("mousedown", event => {
            console.log(this.collectedCards.length )
            // if(this.collectedCards.length === 16){
            //     console.log("END OF GAME");
            //     this.wonLost();
            // }
            if (event.target.tagName === 'CANVAS') {
                let x = event.x - this.game.canvas.offsetLeft;
                let y = event.y - this.game.canvas.offsetTop;
                const row = Math.floor(y / 125);
                const col = Math.floor(x / 125);
                this.index = col + Math.floor(row * 4);
                this.game.show(this.index);

                this.flipCard(types);
            }
        });
    }

    //Comparing if two flipped cards are matching or non-matching 
    flipCard(types) {
       
        //------ pushing clicked cards to array -----
        if (this.shownCards.length === 0) {
            this.previousIndex = this.index;
            this.shownCards.push(types[this.index]);
        }
        if (this.shownCards.length === 1 && this.index !== this.previousIndex) {
            this.shownCards.push(types[this.index]);
            console.log("two element showncard", this.shownCards);
        }

        //------ comparing clicked cards in array -----       
        if (this.shownCards.length === 2 && this.shownCards[0] === this.shownCards[1]) {
            this.collectedCards.push(this.index);
            this.collectedCards.push(this.previousIndex);
            this.score += 100;
            this.shownCards.length = 0;
            
            console.log("i am collecting ", this.collectedCards);
        } 

        if (this.shownCards.length === 2 && this.shownCards[0] !== this.shownCards[1]) {
            this.score -= 100;
            this.shownCards.length = 0;

            setTimeout(() => {
               this.game.deck[this.previousIndex].hideCard();
               this.game.deck[this.index].hideCard();
            }, 400);
        }
        if (this.score < 0) {
            document.getElementById("scorebtn").style.color = "red";
        } else  document.getElementById("scorebtn").style.color = "white";
            document.getElementById("scorebtn").innerText = "ውጤት : " + this.score;
        }


    //This is kind of working but it needs to be called in the correct place
    wonLost() {
        if (this.collectedCards.length === 16 && this.score >= 500) {
            this.context.clearRect(0,0,500,500);
            this.context.drawImage(this.image, 0, 0, 500, 500);
            this.game.sound.play('won', {volume: 1});
        }
         else if(this.collectedCards.length === 16 && this.score <= 400){
            console.log("You Lost");
            this.context.clearRect(0,0,500,500);
            this.context.drawImage(this.imagelost, 0, 0, 500, 500);
            this.game.sound.play('lost', { volume: 1 });
         }

        //-------------Works for win but loops, without this the picture comes behind the canvas   
        window.requestAnimationFrame(() => this.wonLost());
    }
}