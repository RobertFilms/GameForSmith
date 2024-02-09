/*
██████╗░░█████╗░██╗░░░░░██╗░░░░░░██████╗
██╔══██╗██╔══██╗██║░░░░░██║░░░░░██╔════╝
██████╦╝███████║██║░░░░░██║░░░░░╚█████╗░
██╔══██╗██╔══██║██║░░░░░██║░░░░░░╚═══██╗
██████╦╝██║░░██║███████╗███████╗██████╔╝
╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═════╝░
*/

class Paddle{
    constructor(x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c;
    }
    
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    };

    update(ctx){
        if(this.x <= 0){
            this.x = 0
        } else if(this.x + this.w >= ctx.canvas.width){
            this.x = ctx.canvas.width - this.w
        }

        this.x += vx;
    };

    collision(rect2){
        if (
            this.x < rect2.x + rect2.w &&
            this.x + this.w > rect2.x &&
            this.y < rect2.y + rect2.h &&
            this.y + this.h > rect2.y
          ) {
            // Collision detected!
            return true;
          } else {
            // No collision poopy
            return false;
          }
    }
}