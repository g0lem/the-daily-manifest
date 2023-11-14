

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



export class WorldLoader {
    public resourceList: Array<WorldMember> = [];

    constructor(resourceList : Array<WorldMember>) {
        this.resourceList = resourceList;
    }


    append = (array: Array<WorldMember> ) => {
        this.resourceList = [
            ...this.resourceList,
            ...array,
        ];
    }
}