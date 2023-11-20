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
    private spriteName: string = '';
    private resourceLoader: ResourceLoader = new ResourceLoader([]);

    private type : GameObjectTypes = GameObjectTypes.sprite;

    private gameObj = new GameObject();

    constructor() {
    }

    withType = (type: GameObjectTypes) => {
        this.type = type;
        return this;
    }

    withStats = (stats: Stats) => {
        this.gameObj.setStats(stats);
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
        const newId = new Id(id);

        this.gameObj.setId(newId);
        return this;
    }

    withPositionalData = (posX: number, posY: number, sizeX: number, sizeY: number) => {
        const positionalData = new PositionalData(posX,posY, sizeX, sizeY);
        this.gameObj.setPositionalData(positionalData);
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
                this.gameObj.setRenderableData(healthBarRender);
                return this.gameObj;
            case GameObjectTypes.text: 
                const textRender = new TextRender();
                this.gameObj.setRenderableData(textRender);
                return this.gameObj;
            case GameObjectTypes.sprite: 
            default: 
                const sprite = this.generateSprite();
                const animation = new Animation(new Vec2(0,0), new Vec2(0,0));
                const renderData = new SpriteRender(sprite!, animation);
                this.gameObj.setRenderableData(renderData);
                return this.gameObj;
        }
        
    }
}