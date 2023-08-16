export class Vec2 {
    public x : number;
    public y : number;

    constructor(x : number, y : number) {
        this.x = x;
        this.y = y;
    }


    add(vect : Vec2) : Vec2 {
        this.x += vect.x;
        this.y += vect.y;
        return this;
    }

    sub(vect : Vec2) : Vec2 {
        this.x -= vect.x;
        this.y -= vect.y;
        return this;
    }

    dotProd(vect : Vec2) : number {
        this.x *= vect.x;
        this.y *= vect.y;
        const dotProd = this.x + this.y;
        return dotProd;
    }

    prod(vect : Vec2) : number { //there is no cross prod in 2D
        return this.dotProd(vect);
    }

    scale(scale: number) : Vec2 {
        this.x *= scale;
        this.y *= scale;
        return this;
    }

}