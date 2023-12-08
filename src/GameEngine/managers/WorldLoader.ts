

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
}