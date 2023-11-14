import { Stats } from "../../RPGEngine/Stats";
import { PositionalData } from "../composables/PositionalData";
import { ResourceLoader } from "../managers/ResourceLoader";
import { GameObject } from "../renderer/GameObject";
import { Sprite } from "../renderer/primitives/Sprite";
import { Id } from "../utils/Id";
import { GameObjectTypes } from "../utils/constants";

export class bGameObject {
    
    private id : Id = new Id('');

    private spriteName: string = '';
    private resourceLoader: ResourceLoader = new ResourceLoader([]);

    private stats: Stats = new Stats();

    private type : GameObjectTypes = GameObjectTypes.default;

    private positionalData: PositionalData = new PositionalData(0,0,0,0);

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


    withId = (id: string) => {
        this.id = new Id(id);
        return this;
    }

    withPositionalData = (posX: number, posY: number, sizeX: number, sizeY: number) => {
        this.positionalData = new PositionalData(posX,posY, sizeX, sizeY);

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

        return new GameObject(this.id, sprite!, this.positionalData);

        // switch(this.type) {
        //     case GameObjectTypes.player: 
        //         return new PlayerObject(this.id, sprite!, this.positionalData, this.stats);
        //     case GameObjectTypes.default: 
        //     default: 
        //         return new GameObject(this.id, sprite!, this.positionalData);
        // }
        
    }
}