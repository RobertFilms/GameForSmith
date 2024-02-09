/*

██╗░░██╗███████╗██╗░░░░░██╗░░░░░░█████╗░  ░██████╗███╗░░░███╗██╗███████╗███████╗██╗░░░██╗
██║░░██║██╔════╝██║░░░░░██║░░░░░██╔══██╗  ██╔════╝████╗░████║██║██╔════╝██╔════╝╚██╗░██╔╝
███████║█████╗░░██║░░░░░██║░░░░░██║░░██║  ╚█████╗░██╔████╔██║██║█████╗░░█████╗░░░╚████╔╝░
██╔══██║██╔══╝░░██║░░░░░██║░░░░░██║░░██║  ░╚═══██╗██║╚██╔╝██║██║██╔══╝░░██╔══╝░░░░╚██╔╝░░
██║░░██║███████╗███████╗███████╗╚█████╔╝  ██████╔╝██║░╚═╝░██║██║██║░░░░░██║░░░░░░░░██║░░░
╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝░╚════╝░  ╚═════╝░╚═╝░░░░░╚═╝╚═╝╚═╝░░░░░╚═╝░░░░░░░░╚═╝░░░
*/

var ctx = document.getElementById('canvas').getContext('2d');

ctx.canvas.width = window.innerWidth * 0.4;
ctx.canvas.height = window.innerHeight;

var ctx = document.getElementById('canvas').getContext('2d');

function update() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var paddle = new Paddle(ctx.canvas.width / 2 - 85, ctx.canvas.height / 2 + 360, 170, 10, 'green');
    var ball = new Ball(100, 100, 20, 20, 'red');

    Paddle.draw(ctx)
    Paddle.update()

    Ball.draw(ctx);
    Ball.updaye();
    
    requestAnimationFrame(update);
}

requestAnimationFrame(update);