
export class Resource {
    public source: string;
    public key: string;
    public isCritical: boolean;
    public resourceBlob: Blob = new Blob();
    public hasLoaded : boolean = false;

    constructor(src: string, key: string, isCritical : boolean = false) {
        this.source = src;
        this.key = key;
        this.isCritical = isCritical;
    }

    
}