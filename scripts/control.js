class Control {
    constructor(game) {
        this.game = game;
        this.context = this.game.context;
        this.shownCards = [];
        this.previousIndex = "";
    }

    getposition(types) {
        this.score = 0;
        window.addEventListener("mousedown", event => {
         if (event.target.tagName === 'CANVAS') {

                let x = event.x - this.game.canvas.offsetLeft
                let y = event.y- this.game.canvas.offsetTop
                const row = Math.floor(y / 125);
                const col = Math.floor(x / 125);
                const index = col + Math.floor(row * 4);

                this.game.show(index);

                if (this.shownCards.length === 0) {
                    // this.setVisible = false;
                    this.previousIndex = index;
                    this.shownCards.push(types[index]);
                } else if (this.shownCards.length === 1 && index !== this.previousIndex) {
                    // this.setVisible = false;
                        this.shownCards.push(types[index]);
                   
                    if (this.shownCards.length === 2) {
                        if (this.shownCards[0] === this.shownCards[1]) {
                            this.shownCards.length = 0;
                            this.score += 100;

                        } else if (this.shownCards[0] !== this.shownCards[1]) {
                            this.game.hideCard(this.previousIndex);
                            this.game.hideCard(index);
                            this.shownCards.length = 0;
                            this.score -= 100;

                        }
                        if (this.score < 0) {
                            document.getElementById("scorebtn").style.color = "red";
                        }
                        document.getElementById("scorebtn").innerText = "ውጤት : " + this.score;

                    }
                }

            }
        });
    }
}