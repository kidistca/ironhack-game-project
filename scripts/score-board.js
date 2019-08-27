class ScoreBoard {
    constructor (game) {
      this.game = game;
    }
  
    paint () {
      const context = this.game.context;
      const score = this.game.score;
      context.save();
      context.translate(50, 450);
      context.font = '32px monospace';
      context.fillText(`Score ${ score }`, 0, 0);
      context.restore();
    }
  }

//   score(){
//     ctx.font = "30px Tahoma";
//     ctx.fillStyle = "White";
//     ctx.fillText("score:"+score,50,50);
//  } 