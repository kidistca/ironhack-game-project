window.addEventListener('load', () => {
    const $canvas = document.querySelector('canvas');

    const game = new Game($canvas);

    document.getElementById('start-game').onclick = function (){
        // game.reset(); 
          
        game.positionAlphabet();
        game.clear();
        game.paint();
        setTimeout(()=> {
            game.reset()
          }, 4000);
        
        game.getPosition();
        // game.show();
        // game.reset(); 
        
    }

   

 });


 