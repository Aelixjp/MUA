export default class GRender{

    constructor(ctx){
        this.ctx = ctx;
        this.canvas = this.ctx.canvas;
    }

    drawBG(color){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    }

    drawRail(width, height){
        this.ctx.save();
        this.ctx.strokeStyle = "#2AD89E";
        this.ctx.moveTo(100, (height / 5) * 1.5);
        this.ctx.lineTo((width / 2) - 7, (height / 5) * 1.5);
        this.ctx.moveTo((width / 2) - 7, (height / 5) * 1.5);
        this.ctx.lineTo((width / 2) + 1, ((height / 5) * 1.5) - 7);
        this.ctx.stroke();
        this.ctx.restore();
    }

}