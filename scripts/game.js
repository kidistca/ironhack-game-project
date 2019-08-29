const SOUNDS = {
    backgroundMusic: "https://ia802908.us.archive.org/0/items/mythium/JLS_ATI.mp3",
    cardClicked: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/chewing.mp3",
    congratulations: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/happykids.mp3",
    lost: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/HONK.wav"
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
        this.reset();
        this.positionAlphabet();
        this.paintAll();
        setTimeout(() => {
            this.board.boardHide()
            this.control.getposition(this.types);
        }, 4000);
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
        this.sound.play('cardClicked', {volume: 1});
        this.deck[index].paint();
    }
}