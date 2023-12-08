

export const world = [
    {
        id: 'player1',
        type: 'SPRITE',
        spriteName: 'sprite',
        positionalData: {
            posX: 0,
            posY: 0,
            sizeX: 64,
            sizeY: 64,
        }
    },
    {
        id: 'player2',
        type: 'SPRITE',
        spriteName: 'sprite',
        positionalData: {
            posX: 100,
            posY: 100,
            sizeX: 64,
            sizeY: 64,
        }
    },
    {
        id: 'vim',
        type: 'SPRITE',
        spriteName: 'vim',
        positionalData: {
            posX: 100,
            posY: 100,
            sizeX: 16,
            sizeY: 16,
        }
    },
    {
        id: 'healthbar',
        type: 'HEALTHBAR',
        positionalData: {
            posX: 400,
            posY: 400,
            sizeX: 16,
            sizeY: 16,
        },
        stats: {
            health: 100,
            maxHealth: 100,
        }
    },
    {
        id: 'text',
        type: 'TEXT',
        positionalData: {
            posX: 300,
            posY: 300,
            sizeX: 30,
            sizeY: 30,
        },
        stats: {
            health: 100,
            maxHealth: 100,
            font: 'Brush Script MT, cursive',
            text: 'test',
        }
    },
]

export const world2 = {
    scene1: [
        {
            id: 'player1',
            type: 'SPRITE',
            spriteName: 'sprite',
            positionalData: {
                posX: 0,
                posY: 0,
                sizeX: 64,
                sizeY: 64,
            }
        },
        {
            id: 'player2',
            type: 'SPRITE',
            spriteName: 'sprite',
            positionalData: {
                posX: 100,
                posY: 100,
                sizeX: 64,
                sizeY: 64,
            }
        },
        {
            id: 'vim',
            type: 'SPRITE',
            spriteName: 'vim',
            positionalData: {
                posX: 100,
                posY: 100,
                sizeX: 16,
                sizeY: 16,
            }
        },
        {
            id: 'healthbar',
            type: 'HEALTHBAR',
            positionalData: {
                posX: 400,
                posY: 400,
                sizeX: 16,
                sizeY: 16,
            },
            stats: {
                health: 100,
                maxHealth: 100,
            }
        },
        {
            id: 'text',
            type: 'TEXT',
            positionalData: {
                posX: 300,
                posY: 300,
                sizeX: 30,
                sizeY: 30,
            },
            stats: {
                health: 100,
                maxHealth: 100,
                font: 'Brush Script MT, cursive',
                text: 'test',
            }
        },
    ],
    scene2: [
        {
            id: 'vim',
            type: 'SPRITE',
            spriteName: 'vim',
            positionalData: {
                posX: 100,
                posY: 100,
                sizeX: 16,
                sizeY: 16,
            }
        },
        {
            id: 'healthbar',
            type: 'HEALTHBAR',
            positionalData: {
                posX: 400,
                posY: 400,
                sizeX: 16,
                sizeY: 16,
            },
            stats: {
                health: 100,
                maxHealth: 100,
            }
        },
        {
            id: 'text',
            type: 'TEXT',
            positionalData: {
                posX: 300,
                posY: 300,
                sizeX: 30,
                sizeY: 30,
            },
            stats: {
                health: 100,
                maxHealth: 100,
                font: 'Brush Script MT, cursive',
                text: 'scene2',
            }
        },
    ],
}
