window.addEventListener('load', () => {
    const $canvas = document.querySelector('canvas');

    const game = new Game($canvas);

    document.getElementById('start-game').onclick = function (){  

        game.start();
        
        }
        
 });

 