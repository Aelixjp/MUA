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
        this.weight = weight;
        this.accel = -9.8;
        this.time = 0;
        this.distance = 0;
        this.initialVel = 0;
        this.finalVel = 0;
        this.vel = this.initialVel;
        this.realVel = this.initialVel;
        this.chrono = new Chrono();
        this.stopped = false;
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
                this.realVel = tick * this.accel;
                this.x += this.realVel;
            }else{
                this.realVel = tick * this.accel;
                this.chrono.stop();
            }
        }

        this.ctx.save();
        this.ctx.strokeStyle = "#0FF";
        this.ctx.font = "20px Georgia";
        this.ctx.strokeText(-this.realVel.toFixed(3), 730, 305);
        this.ctx.restore();

        this.ctx.save();
        this.ctx.strokeStyle = "#0FF";
        this.ctx.font = "20px Georgia";
        this.ctx.strokeText(tick.toFixed(3), 500, 100);
        this.ctx.restore();
    }

    calculate({accel, time}){
        this.accel = -accel;
        this.time = time;

        if(Object.values(data).length >= 2){
            const finalVel = utils.finalVel(0, -this.accel, time);
            console.log(finalVel);
        }else{
            alert("Se requieren ambos parametros!");
        }
    }

}