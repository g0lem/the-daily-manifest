import { Stats } from "../utils/Stats";
import { PositionalData } from "../composables/PositionalData";
import { Id } from "../utils/Id";



export class Entity {
    public id: Id = new Id('');

    public positionalData: PositionalData = new PositionalData(0,0,0,0);

    public stats: Stats = new Stats();


    constructor() {
    }

    setStats = (stats: Stats) => this.stats = stats;
    
    setId = (id: Id) => this.id = id;

    setPositionalData = (positionalData: PositionalData) => this.positionalData = positionalData;


    generateFontString = () => {
        return `${this.positionalData.getSize().x}px ${this.stats.font}`;
    }
}