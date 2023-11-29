

export const events = [
    {
        id: 'moveUp',
        key: 'w',
        target: 'player2',
        deps: ['player'],
        handler: (target, deps) => {
            target?.entity?.positionalData?.addToPos(0, -8);
        }
    }
]