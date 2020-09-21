import GRender from "./scripts/GRender.js";
import Loader from "./scripts/Loader.js";
import Carrito from "./scripts/Carrito.js";
import Cuerda from "./scripts/Cuerda.js";
import Ball from "./scripts/Ball.js";
import Weight from "./scripts/Weight.js";
window.onload = ()=>{

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const aceleracion = document.getElementById("aceleracion");
    const tiempo = document.getElementById("tiempo");
    const boton = document.getElementById("calcular");

    const CWIDTH = 1200;
    const CHEIGHT = 680;
    let grender, loader, carrito, cuerda;
    let ball, weight;

    function setup(){
        canvas.width = CWIDTH;
        canvas.height = CHEIGHT;
        grender = new GRender(ctx);
        carrito = new Carrito(ctx, 1038, ((canvas.height / 5) * 1.5) - 33, 75, 40);
        cuerda  = new Cuerda(ctx, 141, carrito.y + (carrito.h / 2), 360, 40, 20);
        ball    = new Ball(ctx, 600, carrito.y + (carrito.h / 2) + 7, 6);
        weight  = new Weight(ctx, 590, cuerda.y + cuerda.orgH + 60, 30, 20);
        loader  = new Loader;
        loader.loadSource("Carrito", "automovil", "webp").then(draw);
        addEvents();
    }

    function addEvents(){
        boton.addEventListener("click", () => {
            carrito.calculate({
                accel: aceleracion.value, 
                time: tiempo.value, 
                cuerdaDist: cuerda.orgW + 5
            }, cuerda, weight);
        });
    }

    function draw(){
        grender.drawBG("#515A5A");
        weight.draw(cuerda.currDeltaW);
        ball.draw();
        grender.drawRail(canvas.width, canvas.height);
        carrito.draw(loader.resources.get("Carrito"));
        carrito.move(ball.left);
        cuerda.draw();
        cuerda.move(carrito.derecha);
        cuerda.reduceSize(ball.right);
        requestAnimationFrame(draw);
    }

    setup();

}