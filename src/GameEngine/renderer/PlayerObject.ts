import { Stats } from "../../RPGEngine/Stats";
import { GameObject } from "./GameObject";
import { Vec2 } from "../utils/Vec2";
import { Sprite } from "./primitives/Sprite";
import { Id } from "../utils/Id";



export class PlayerObject extends GameObject {

    public stats: Stats;

    constructor(id: Id, sprite: Sprite, position: Vec2, stats: Stats) {
        super(id, sprite, position);

        this.stats = stats;

    }
}