import { degreesToRadians as degToRad, Vector } from "./utilities.js";
export default class Ball{

    constructor(ctx, x, y, r){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r;
    }

    get center(){
        return new Vector(this.x + this.r, this.y + this.r);
    }

    get d(){
        return this.r * 2;
    }

    get left(){
        return this.x - this.r;
    }

    get right(){
        return this.x + this.r;
    }

    draw(){
        this.ctx.save();
        this.ctx.strokeStyle = "#fff";
        this.ctx.fillStyle = "#fff";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, degToRad(360));
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.restore();
    }

}