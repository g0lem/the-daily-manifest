import { bGameObject } from "../builders/bGameObject";
import { bStats } from "../builders/bStats";
import { Renderer } from "../renderer/Renderer";
import { GameObjectTypes } from "../utils/constants";
import { ResourceLoader } from "./ResourceLoader";


export type WorldMemberStats = {
    health: number,
    maxHealth: number,
    attack: number,
    armor: number,
    font: string,
    text: string,
    visible: boolean,
}


export type WorldMember = {
    id: string,
    type: string,
    spriteName: string,
    positionalData: {
        posX: number,
        posY: number,
        sizeX: number,
        sizeY: number,
    },
    stats: WorldMemberStats,
}

export type Scene = Array<WorldMember>;

export type SceneMap = Map<string, Scene>;

export class WorldLoader {
    public scenes: SceneMap = new Map();
    public sceneId: string = 'scene1';

    constructor(resourceList : SceneMap) {
        this.scenes = resourceList;
    }

    set = (sceneId: string, scene: Scene) => {
        this.scenes!.set(sceneId, scene);
    }

    getCurrentScene = () => {
        return this.scenes!.get(this.sceneId);
    }

    setScene = (sceneId : string) => {
        this.sceneId = sceneId;
    }

    generateGameObject = (resourceLoader: ResourceLoader, worldMember: WorldMember) => {
        const [posX, posY, sizeX, sizeY] = Object.values(worldMember.positionalData);
        const stats = new bStats().fromWorldMemberStats(worldMember.stats);
        
        return new bGameObject()
                        .withResourceLoader(resourceLoader)
                        .withId(worldMember.id)
                        .withType(worldMember.type as GameObjectTypes)
                        .withSpriteName(worldMember.spriteName)
                        .withPositionalData(posX, posY, sizeX, sizeY)
                        .withStats(stats)
                        .build();
    }

    loadWorld = (renderer: Renderer, resourceLoader: ResourceLoader) => {
        this.getCurrentScene()!.forEach((worldMember : WorldMember) => {
            const gameObj = this.generateGameObject(resourceLoader, worldMember);

            renderer.push(gameObj!);
        })
    }
}