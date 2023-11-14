import { Vec2 } from "../utils/Vec2";



export class PositionalData {
    private position : Vec2;
    private size : Vec2;

    constructor(posX: number, posY: number, sizeX: number, sizeY: number) {
        this.position = new Vec2(posX, posY);
        this.size = new Vec2(sizeX, sizeY);
    }

    addToPos = (posX: number, posY: number) => {
        const vectorToAdd = new Vec2(posX, posY);

        this.position.add(vectorToAdd);
    }

    addToSize = (posX: number, posY: number) => {
        const vectorToAdd = new Vec2(posX, posY);

        this.size.add(vectorToAdd);
    }

    getPosition = () => {
        return this.position;
    }

    getSize = () => {
        return this.size;
    }

    getAll = () => {
        return <const> [
            this.position.x,
            this.position.y,
            this.size.x,
            this.size.y,
        ]
    }

    getThree = () => {
        return <const> [
            this.position.x,
            this.position.y,
            this.size.x
        ]
    }
}