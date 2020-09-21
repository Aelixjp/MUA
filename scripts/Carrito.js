import Chrono from "./Chrono.js";
import * as utils from "./utilities.js";

export default class Carrito{

    constructor(ctx, x, y, w, h, weight){
        this.ctx = ctx;
        this.canvas = this.ctx.canvas;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.orgX = x;
        this.weight = weight;
        this.accel = -9.8;
        this.time = 0;
        this.distance = 0;
        this.initialVel = 0;
        this.finalVel = this.initialVel;
        this.vel = this.initialVel;
        this.chrono = new Chrono();
        this.stopped = true;
        this.step = 0;
        this.canReset = false;
    }

    get izquierda(){
        return (this.canvas.width) - this.x - this.w;
    }

    get derecha(){
        return (this.canvas.width) - this.x;
    }

    get arriba(){
        return this.y;
    }

    get abajo(){
        return this.y + this.h;
    }

    draw(imagen){
        this.ctx.save();
        this.ctx.translate(this.canvas.width, 0);
        this.ctx.scale(-1,1);
        this.ctx.drawImage(imagen, this.x, this.y, this.w, this.h);
        this.ctx.restore();
    }

    move(limit){
        let tick = 0;

        if(!this.stopped){
            if(this.chrono.time === 0) this.chrono.start();
            tick = this.chrono.tick();

            if(this.derecha < limit - 2.5){
                this.finalVel = tick * this.accel;
                this.x += tick * this.step;
                this.distance = utils.distance(-this.accel, tick);
            }else{
                //The car is stopped!
                this.canReset = true;
                this.finalVel = tick * this.accel;
                this.distance = utils.distance(-this.accel, tick);
                this.chrono.stop();
            }
        }

        this.ctx.save();
        this.ctx.strokeStyle = "#0FF";
        this.ctx.font = "20px Georgia";
        this.ctx.strokeText(-this.finalVel.toFixed(3), 880, 295);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.strokeStyle = "#0FF";
        this.ctx.font = "20px Georgia";
        this.ctx.strokeText(tick.toFixed(3), 500, 100);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.strokeStyle = "#0FF";
        this.ctx.font = "20px Georgia";
        this.ctx.strokeText(this.distance, 880, 360);
        this.ctx.restore();
    }

    reset(){
        this.x = this.orgX;
        this.initialVel = 0;
        this.finalVel = 0;
        this.step = 0;
        this.distance = 0;
    }

    resetSimulation(string){
        this.reset();
        string.reset();
        this.chrono.restart();
    }

    calculate({accel, time, cuerdaDist}, ...simulationParams){
        if(this.canReset){
            this.resetSimulation(...simulationParams);
            this.canReset = false;
        }
        this.accel = -accel;
        this.time = time;
        this.step = -(cuerdaDist / utils.distance(-this.accel, this.time)) / ((9.8 / -this.accel) * 5.179);
        this.stopped = false;
    }

}