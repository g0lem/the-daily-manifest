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

    isBigger(vectorToCompare: Vec2) {
        return vectorToCompare.x <= this.x && vectorToCompare.y <= this.y;
    }

    isSmaller(vectorToCompare: Vec2) {
        return vectorToCompare.x >= this.x && vectorToCompare.y >= this.y;
    }

    isContained(vectorToCompare: Vec2, sizeVector: Vec2,) {
        const vectCopy = new Vec2(vectorToCompare.x, vectorToCompare.y);
        vectCopy.add(sizeVector);

        return vectorToCompare.isSmaller(this) && vectCopy.isBigger(this);
    }

    copy() : Vec2 {
        const _copy = new Vec2(this.x, this.y);
        return _copy;
    }

    getBase() : Vec2 {
        const baseX : number = !!this.x ? 1 : 0;
        const baseY : number = !!this.y ? 1 : 0;

        const base = new Vec2(baseX, baseY);

        return base;
    }

    compare(vec : Vec2) {
        return vec.x === this.x && vec.y === this.y;
    }

}