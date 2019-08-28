class Control{
    constructor(game){
        // this.callbacks = callbacks;
        this.game = game;
        this.context = this.game.context;
        this.board = new Board(game);
        this.sound = new Sound();
        // this.scoreBoard = new ScoreBoard(game);
        this.shownCards = [];
        this.temp = [];
        this.previousIndex = "";
        this.score = 0;
        
    }
    
    getposition(types){
     this.score = 0;
     window.addEventListener("mousedown", event =>{
        if (event.target.tagName === 'CANVAS') {
            
            let x = event.x;
            let y = event.y;
        
            let context = document.getElementById("canvas");
        
            x -= context.offsetLeft;
            y -= context.offsetTop;
      
        console.log(types);
        const row = Math.floor(y / 125);
        const col = Math.floor(x / 125);
        const index = col + Math.floor(row * 4);
        // this.shownCards.push(index);
        // console.log(this.shownCards);
        this.game.show(index);
        console.log(index);
        
        if(this.shownCards.length === 0){
                // this.setVisible = false;
                this.previousIndex = index;
                this.shownCards.push(types[index]);
        }
        else if(this.shownCards.length === 1){
                // this.setVisible = false;
            if(index !== this.previousIndex){
                this.shownCards.push(types[index]);
                }
                console.log("PI is " + this.previousIndex);
            
             console.log(this.shownCards);
        if(this.shownCards.length === 2){
        if(this.shownCards[0] === this.shownCards[1]){
            this.shownCards.length = 0;
            // this.sound.play('congratulations', { volume: 1 });
            console.log("YESSSSSSS");
            this.score += 100;
            
        } 
        else if(this.shownCards[0] !== this.shownCards[1]) {
            // this.game.hideCard(index);
            this.shownCards.length = 0;
            console.log("boooooo");
            this.score -= 100;
           
        }
        console.log("score" + this.score);
        if(this.score < 0){
        document.getElementById("scorebtn").style.color = "red";
        }
        document.getElementById("scorebtn").innerText = "ውጤት : " + this.score;
        
    }
}
    
    }
    });
}
}
