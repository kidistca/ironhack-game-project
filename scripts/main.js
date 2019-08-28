window.addEventListener('load', () => {
    const $canvas = document.querySelector('canvas');

    const game = new Game($canvas);

    document.getElementById('start-game').onclick = function (){  
        
        // game.start();
        game.reset(); 
        game.positionAlphabet();
        game.clear();  
        // game.loop(0);
        game.paint();
        setTimeout(()=> {
            game.hide()
          }, 4000);  
        game.getPosition();
        }
 });

 