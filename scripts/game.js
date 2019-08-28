const SOUNDS = {
    backgroundMusic: "https://ia802908.us.archive.org/0/items/mythium/JLS_ATI.mp3",
    cardClicked: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/chewing.mp3",
    congratulations: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/happykids.mp3",
    lost: "https://anjaboettcher.github.io/The-very-hungry-caterpillar-game/images/HONK.wav"
  };

const arrayShuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ array[i], array[j]] = [ array[j], array[i] ];
    }
    return array;
};

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.board = new Board(this);
        this.control = new Control(this);
        //  this.card = new Card(this);
        this.deck = [];
        this.types = [];
        this.row = 0;
        this.column = 0;
        // this.scoreBoard = new ScoreBoard(this);
        this.sound = new Sound();
        this.sound.loadSounds(SOUNDS);


    }

    positionAlphabet(){
        this.types = [];
        const size = 4;
        for (let index = 0; index < (size * size) / 2; index++) {
            this.types.push(index);
            this.types.push(index);
        }
        const shuffled = arrayShuffle(this.types);
        this.deck = shuffled.map((type, index) => {
            this.row = Math.floor(index / 4);
            this.column = index % 4;
            //this.card = new Card(this, type, row, column);
             return new Card(this, type, this.row, this.column);
        });
        console.log(this.types);
        
    }

    // reset(){
    //     // const card = new Card();
    //     // this.card = new Card();
    //     // setTimeout(()=> {
    //         // this.board.hide();
    //         // this.score = 0;
            
    //     //   }, 4000);
        
    // }
    reset(){
        this.score = 0;
        document.getElementById("scorebtn").style.color = "white";
        document.getElementById("scorebtn").innerText = "ውጤት : " + this.score;
    }
    getPosition(){
        this.control.getposition(this.types);
    }
    start () {
        // this.reset();
        this.positionAlphabet();
        // this.clear();
        this.paint();
        this.loop(0);
        this.getPosition();
      }

    loop (timestamp) {
        if (this.timer < timestamp - this.SPEED) {
        //   this.runLogic();
        this.paint();
        setTimeout(()=> {
            this.reset()
          }, 4000);  
          this.timer = timestamp;
        }
        // window.requestAnimationFrame((timestamp) => this.loop(timestamp));
      }

    clear(){
        const width = this.canvas.width;
        const height = this.canvas.height;
        this.context.clearRect(0, 0, width, height);
    }

    paint (){
        this.board.paint();
        for (let index = 0; index < this.deck.length; index++) {
            const card = this.deck[index];
            card.paint();
        }
        // this.scoreBoard.paint();
       
    }
    hide(){
        for (let index = 0; index < this.deck.length; index++) {
            const card = this.deck[index];
            card.hide();
        }
    }

    show(index){
        this.sound.play('cardClicked', { volume: 1 });
        for (let i = 0; i < this.deck.length; i++) {
            if(i===index){
            const card = this.deck[i];
            card.show(i);
            }
        }       
    }
    hideCard(index){
        for (let i = 0; i < this.deck.length; i++) {
            if(i===index){
            const card = this.deck[i];
            card.hideCard(i);
            }
    } 
    

}
}