import { Resource } from "./Resource";
import { Vec2 } from "./Vec2";
import { getContext } from "./utils/canvas";


export class Sprite {
    public size: Vec2;
    public resource: Resource;
    public image: ImageBitmap | null = null;

    public hasLoaded: Boolean = false;

    constructor(resource: Resource, size: Vec2) {
        this.resource = resource;
        this.size = size;

        this.resourceProcessingInterval();
    }

    resourceProcessingInterval = () => {
        if(!this.resource.hasLoaded || !this.hasLoaded) {
            this.processResource();
            setTimeout(() => this.resourceProcessingInterval(), 300);
        }
    }

    processResource = () => {
        createImageBitmap(this.resource.resourceBlob).then(image=> {
            this.hasLoaded = true;
            this.image = image;
        })
    }


    render = (position: Vec2) => {
        if(!this.hasLoaded || !this.image) {
            return;
        }
        const context = getContext();
        context.drawImage(this.image, position.x, position.y, this.size.x, this.size.y);
    }


}