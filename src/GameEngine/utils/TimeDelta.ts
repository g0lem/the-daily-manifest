

export class TimeDelta {

    private lastRegisteredTime : number = 0;

    constructor() {
        this.setTime();
    }

    setTime = () => {
        this.lastRegisteredTime = Date.now();
    }

    executeWithTimeDelta = (callback: () => void, delta: number) => {
        if(Date.now() - this.lastRegisteredTime < delta) {
            return;
        } 
        this.setTime();
        callback();
    }

}