

export class Id {
    private id: string = '';

    constructor(idString: string) {
        this.id = idString;
    }

    getId = () => this.id;
    setId = (id: string) => this.id = id;

    hasId = (id: string) => this.id === id;

}