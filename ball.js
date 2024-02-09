/*
██████████████████████████████████████████████████████████████████
█─█─█▄─▄▄─█▄─▄███▄─▄███─▄▄─███─█─██▀▄─██▄─█─▄█▄─▄▄▀█▄─▄▄─█▄─▀█▄─▄█
█─▄─██─▄█▀██─██▀██─██▀█─██─███─▄─██─▀─███▄─▄███─██─██─▄█▀██─█▄▀─██
▀▄▀▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▀▀▀▄▀▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▄▀▀▄▄▄▄▄▀▄▄▄▀▀▄▄▀
*/

class Ball{
    constructor(x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c;

        this.spd = 3.5;
        this.ydir = 1;
        this.xdie = 1;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }

    updtate(){
        this.x += this.xdir * this.spd;
        this.y += this.ydir * this.spd;
    }
}