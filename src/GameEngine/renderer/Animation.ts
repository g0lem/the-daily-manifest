import { Vec2 } from "../utils/Vec2";
import { Throttle } from "../utils/Throttle";
import { TimeDelta } from "../utils/TimeDelta";


export class Animation {
    public frameStart : Vec2 = new Vec2(0,0);
    public frameSize : Vec2 = new Vec2(64, 64);
    public amountOfFrames : Vec2 = new Vec2(3, 0);
    public currentFrame : Vec2 = new Vec2(0,0);
    private throttle : Throttle;
    private timeDelta : TimeDelta;

    

    constructor(frameStart : Vec2, frameSize : Vec2) {
        this.frameStart = frameStart;
        this.currentFrame = frameStart.copy();
        this.frameSize = frameSize;

        this.throttle = new Throttle(300);

        this.timeDelta = new TimeDelta();

        this.throttle.startThrottle();
    }

    updateFrame() {
        this.timeDelta.executeWithTimeDelta(()=> {
            this.forceUpdateFrame();
        }, 300)
    }

    forceUpdateFrame = () => {
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

    setFrameStart = (frameStart : Vec2) => {
        if(this.frameStart.compare(frameStart)) {
            return;
        }
        this.frameStart = frameStart;
        this.forceUpdateFrame();
    }

    setAmountOfFrames = (amountOfFrames : Vec2) => {
        if(this.amountOfFrames.compare(amountOfFrames)) {
            return;
        }
        this.amountOfFrames = amountOfFrames;
        this.forceUpdateFrame();
    }


}