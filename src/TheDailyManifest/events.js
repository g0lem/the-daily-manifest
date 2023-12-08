

export const events = [
    {
        id: 'moveUp',
        key: 'w',
        target: 'player2',
        deps: ['player', 'text'],
        handler: (target, deps) => {
            const [player1, text] = deps;
            target?.entity?.positionalData?.addToPos(0, -8);

            text?.entity?.positionalData?.addToPos(0, -8);
        }
    }
]