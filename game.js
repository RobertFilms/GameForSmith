class Game {
    constructor(){
        this.ticks = 0;
        this.paused = false;
        this.loop;
        this.race;
    }

    step(){
        this.ticks++;
        this.draw();
    }

    draw(ctx){

    }
}