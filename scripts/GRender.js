export default class GRender{

    constructor(ctx){
        this.ctx = ctx;
        this.canvas = this.ctx.canvas;
    }

    drawBG(background){
        this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
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

    drawBox(){
        this.ctx.save();
        this.ctx.fillStyle = "rgb(41, 39, 39)";
        this.ctx.fillRect(855, 40, 250, 400);
        this.ctx.restore();
    }

    drawMountain(){
        this.ctx.save();
        this.ctx.fillStyle = "chocolate";
        this.ctx.fillRect(0, 205, 590, 474);
        this.ctx.restore();
    }

}