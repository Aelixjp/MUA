export default class Cuerda{

    constructor(ctx, x, y, w, h, r){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.orgX = x;
        this.orgW = w;
        this.orgH = h;
        this.currDeltaW = 0;
    }

    draw(){
        this.ctx.save();
        this.ctx.strokeStyle = "#fff";
        this.ctx.lineWidth = .5;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.arcTo (this.x + this.w + 5, this.y, this.x + this.w + 5, 
                        this.y + 70, this.r);
        this.ctx.lineTo(this.x + this.w + 5, this.y + this.h + 40);
        this.ctx.stroke();
        this.ctx.restore();
    }

    move(newX){
        this.x = newX;
    }

    reset(){
        this.x = this.orgX;
        this.w = this.orgW;
        this.h = this.orgH;
        this.currDeltaW = 0;
    }

    reduceSize(ballD){
        this.w = ballD - this.x;
        this.increaseHeight(this.orgW - this.w + 25);
    }
    
    increaseHeight(deltaWidth){
        this.h = this.orgH + deltaWidth;
        this.currDeltaW = deltaWidth;
    }

}