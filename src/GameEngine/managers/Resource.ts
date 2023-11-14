import { Vec2 } from "../utils/Vec2";

export class Resource {
    public source: string;
    public key: string;
    public isCritical: boolean;
    public resourceBlob: Blob = new Blob();
    public hasLoaded : boolean = false;
    public size : Vec2 = new Vec2(0,0);

    constructor(src: string, key: string, size: Vec2, isCritical : boolean = false) {
        this.source = src;
        this.key = key;
        this.size = size;
        this.isCritical = isCritical;
    }

    
}