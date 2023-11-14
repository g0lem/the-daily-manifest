import { Stats } from "../utils/Stats";
import { PositionalData } from "../composables/PositionalData";
import { ResourceLoader } from "../managers/ResourceLoader";
import { Animation } from "../renderer/Animation";
import { GameObject } from "../renderer/GameObject";
import { Sprite } from "../renderer/primitives/Sprite";
import { HealthBarRender } from "../renderer/renderables/HealthBarRender";
import { SpriteRender } from "../renderer/renderables/SpriteRender";
import { TextRender } from "../renderer/renderables/TextRender";
import { Id } from "../utils/Id";
import { Vec2 } from "../utils/Vec2";
import { GameObjectTypes } from "../utils/constants";

export class bGameObject {
    
    private id : Id = new Id('');

    private spriteName: string = '';
    private resourceLoader: ResourceLoader = new ResourceLoader([]);

    private stats: Stats = new Stats();

    private type : GameObjectTypes = GameObjectTypes.sprite;

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
        switch(this.type) {
            case GameObjectTypes.healthBar: 
                const healthBarRender = new HealthBarRender();
                return new GameObject(this.id, healthBarRender, this.positionalData);
            case GameObjectTypes.text: 
                const textRender = new TextRender();
                return new GameObject(this.id, textRender, this.positionalData);
            case GameObjectTypes.sprite: 
            default: 
                const sprite = this.generateSprite();
                const animation = new Animation(new Vec2(0,0), new Vec2(0,0));
                const renderData = new SpriteRender(sprite!, animation);
                return new GameObject(this.id, renderData, this.positionalData);
        }
        
    }
}