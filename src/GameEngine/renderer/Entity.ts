import { Stats } from "../../RPGEngine/Stats";
import { PositionalData } from "../composables/PositionalData";
import { Id } from "../utils/Id";



export class Entity {
    public id: Id;

    public positionalData: PositionalData = new PositionalData(0,0,0,0);

    public stats: Stats = new Stats();


    constructor(id: Id,  positionalData: PositionalData) {
        this.id = id;
        this.positionalData = positionalData;
    }


    generateFontString = () => {
        return `${this.positionalData.getSize().x}px ${this.stats.font}`;
    }
}