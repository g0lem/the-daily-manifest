import { Stats } from "../../RPGEngine/Stats";
import { ResourceLoader } from "../loaders/ResourceLoader";
import { GameObject } from "../renderer/GameObject";
import { PlayerObject } from "../renderer/PlayerObject";
import { Sprite } from "../renderer/primitives/Sprite";
import { Id } from "../utils/Id";
import { Vec2 } from "../utils/Vec2";
import { GameObjectTypes } from "../utils/constants";

export class bGameObject {
    
    private id : Id = new Id('');

    private spriteName: string = '';
    private position: Vec2 = new Vec2(0,0);
    private resourceLoader: ResourceLoader = new ResourceLoader([]);

    private stats: Stats = new Stats();

    private type : GameObjectTypes = GameObjectTypes.default;

    constructor() {
    }

    withType = (type: GameObjectTypes) => {
        this.type = type;
        return this;
    }

    withStats = (stats: Stats) => {
        this.stats = stats;
        return this;
    }

    withResourceLoader = (resourceLoader: ResourceLoader) => {
        this.resourceLoader = resourceLoader;

        return this;
    }

    withSpriteName = (spriteName: string) => {
        this.spriteName = spriteName;

        return this;
    }

    withPosition = (position: Vec2) => {
        this.position = position;

        return this;
    }

    withId = (id: string) => {
        this.id = new Id(id);
        return this;
    }


    generateSprite = () : Sprite | void => {
        const resource = this.resourceLoader
                            .resourceList.find(({key}) => key === this.spriteName);
        if(!resource) {
            return;
        }
        return new Sprite(resource);
    }

    build() {
        const sprite = this.generateSprite();

        switch(this.type) {
            case GameObjectTypes.player: 
                return new PlayerObject(this.id, sprite!, this.position, this.stats);
            case GameObjectTypes.default: 
            default: 
                return new GameObject(this.id, sprite!, this.position);
        }
        
    }
}