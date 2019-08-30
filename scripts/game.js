const SOUNDS = {
    cardflip: "audios/cardflip.mp3",
    cardshuffle: "audios/cardshuffle.mp3",
    won: "audios/won.mp3",
    lost: "audios/lost.mp3"
};

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        // this.board = new Board(this);
        this.control = new Control(this);
        this.sound = new Sound();
        this.sound.loadSounds(SOUNDS);

        this.row = 0;
        this.column = 0;
    }
    
    reset() {
        this.control.wonLost();
        this.types = [];
        this.deck = []; // This is an array of new Card
        this.board = new Board(this);
        this.control.score = 0;
        document.getElementById("scorebtn").style.color = "white";
        document.getElementById("scorebtn").innerText = "ውጤት : " + this.control.score;
    }

    start() {
        this.sound.play('cardshuffle', {volume: 1});
        this.reset();
        this.positionAlphabet();
        this.paintAll();
        setTimeout(() => {
            this.board.boardHide()
            this.control.getposition(this.types);
        }, 7000);
    }

    arrayShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    positionAlphabet() {
        this.types = [];
        const size = 4;
        for (let index = 0; index < (size * size) / 2; index++) {
            this.types.push(index);
            this.types.push(index);
        }
        const shuffled = this.arrayShuffle(this.types);
        this.deck = shuffled.map((type, index) => {
            this.row = Math.floor(index / 4);
            this.column = index % 4;
            return new Card(this, type, this.row, this.column);
        });
    }

    paintAll() {
        this.board.paint();
        for (let index = 0; index < this.deck.length; index++) {
            const card = this.deck[index];
            card.paint();
        }
    }

    show(index) {
        if (!this.sound.sounds['cardflip'].paused){
            this.sound.sounds['cardflip'].currentTime = 0
        }
        this.sound.play('cardflip', {volume: 1});
        this.deck[index].paint();
    }
}