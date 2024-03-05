class Camera {
    constructor(){
        this.target;
        this.pos = new Vector.zero;

    }

    update(){
        this.pos = this.target.pos;
        
    }
}