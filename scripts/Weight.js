export default class Weight{

    constructor(ctx, x, y, w, h){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(offsetY = 0){
        this.ctx.save();
        this.ctx.fillStyle = "#fff";
        this.ctx.strokeStyle = "#fff";
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, offsetY + this.y);
        this.ctx.lineTo(this.x + 10,          offsetY + this.y - this.h);
        this.ctx.lineTo(this.x + this.w,      offsetY + this.y - this.h);
        this.ctx.lineTo(this.x + this.w + 10, offsetY + this.y         );
        this.ctx.lineTo(this.x, offsetY + this.y);
        this.ctx.fill();
        this.ctx.restore();
    }

}