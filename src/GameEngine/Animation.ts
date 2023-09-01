import { Vec2 } from "./Vec2";


export class Animation {
    public frameStart : Vec2 = new Vec2(0,0);
    public frameSize : Vec2 = new Vec2(64, 64);
    public amountOfFrames : Vec2 = new Vec2(3, 0);
    public currentFrame : Vec2 = new Vec2(0,0);

    constructor(frameStart : Vec2, frameSize : Vec2) {
        this.frameStart = frameStart;
        this.currentFrame = frameStart.copy();
        this.frameSize = frameSize;
    }

    updateFrame() {
        if(this.currentFrame.isBigger(this.amountOfFrames))  {
            this.currentFrame = this.frameStart.copy();
        }

        const base : Vec2  = this.amountOfFrames.getBase();

        this.currentFrame.add(base);
    }

    getCurrentFramePosition() {
        const currentFramePosition = this.currentFrame.copy();

        currentFramePosition.prod(this.frameSize);

        return currentFramePosition;
    }

    getFrame() {
        return {
            frameSize: this.frameSize,
            currentFramePosition: this.getCurrentFramePosition(),
        }
    }


}