import { Animation } from "../Animation";
import { Resource } from "../../managers/Resource";
import { Vec2 } from "../../utils/Vec2";
import { getContext } from "../../utils/canvas";


export class Sprite {
    public size: Vec2;
    public resource: Resource;
    public image: ImageBitmap | null = null;
    public currentAnimation : Animation = new Animation(new Vec2(0,0), new Vec2(64,64));

    public hasLoaded: Boolean = false;

    constructor(resource: Resource) {
        this.resource = resource;
        this.size = resource.size;

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

    setAnimation = (newAnimation : Animation) => {
        this.currentAnimation = newAnimation;
    }


    render = (position: Vec2) => {
        if(!this.hasLoaded || !this.image) {
            return;
        }
        const context = getContext();

        this.currentAnimation!.updateFrame();
        const frame = this.currentAnimation!.getFrame();
        context.drawImage(
            this.image, 
            frame.currentFramePosition.x, 
            frame.currentFramePosition.y, 
            frame.frameSize.x, 
            frame.frameSize.y,position.x, 
            position.y, 
            this.size.x, 
            this.size.y
        );
    }


}