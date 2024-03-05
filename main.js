let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let game;

window.onload = function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    game = new Game();
    game.loop = setInterval(game.step.bind(game), 16);

}

window.onresize = function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}