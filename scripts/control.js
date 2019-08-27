class Control{
    constructor(game){
        // this.callbacks = callbacks;
        this.game = game;
        this.context = this.game.context;
        this.board = new Board(game);
    }
    
    getposition(types){
        // let index = "";
     window.addEventListener("mousedown", event =>{
        if (event.target.tagName === 'CANVAS') {
            let x = event.x;
            let y = event.y;
        
            let context = document.getElementById("canvas");
        
            x -= context.offsetLeft;
            y -= context.offsetTop;
      
        // console.log(x,y);
        
        console.log(types);
        const row = Math.floor(y / 125);
        const col = Math.floor(x / 125);
        const index = col + Math.floor(row * 4);

        this.game.show(index);
        console.log(index);

        for(let i=0; i<types.length; i++){
            if(types[index] === types[i]){
                console.log(i);
            }
        }
    }
    });
}
}
