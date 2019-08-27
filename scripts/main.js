window.addEventListener('load', () => {
    const $canvas = document.querySelector('canvas');

    const game = new Game($canvas);

    document.getElementById('start-game').onclick = function (){  
        // game.reset(); 
        // game.start();
        game.positionAlphabet();
        game.clear();  
        // game.loop(0);
        game.paint();
        setTimeout(()=> {
            game.reset()
          }, 4000);  
        game.getPosition();
        }
 });

  // game.show();
        // game.reset(); 

 