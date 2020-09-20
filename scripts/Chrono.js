export default class Chrono{

    constructor(){
        this.lastTime = 0;
        this.time = 0;
        this.stopped = false;
    }

    start(){
        this.lastTime = performance.now();
    }

    restart(){
        this.stopped = false;
        this.lastTime = 0;
        this.time = 0;
    }

    tick(){
        this.time = !this.stopped ? performance.now() - this.lastTime : this.time;
        return this.toSeconds();
    }

    stop(){
        this.stopped = true;
    }

    toSeconds(){
        return this.time / 1000;
    }

}