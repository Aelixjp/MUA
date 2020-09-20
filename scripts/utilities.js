export const degreesToRadians = deg => (Math.PI / 180) * deg;
export const radiansToDegrees = rad => (rad * 180) / Math.PI;
export const accel    = (vi, vf, t) => (vf - vi) / t;
export const time     = (vi, vf, a) => (vf - vi) / a;
export const finalVel = (vi, a , t) => vi + (a * t);
export const distance = (vi, vf, t) => (vf + (vi * t)) / 2;

export class Vector{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
}