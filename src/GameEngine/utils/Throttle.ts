


export class Throttle {
    private shouldRun : boolean = true;
    private msInterval : number = 300;

    private timeoutId : number = 0;

    private callback: ()=>void;

    constructor(msInterval : number) {
        this.callback = () => {};
        this.msInterval = msInterval;
    }


    setCallback = (callback: ()=>void) => {
        this.callback = callback;
    }

    initializeThrottle = () => {
        if(this.shouldRun) {
            console.log('here')
            this.shouldRun = false;
            this.timeoutId = setTimeout(()=> {
                console.log('here')
                this.callback();
                this.shouldRun = true;
                this.initializeThrottle();
            }, this.msInterval)
        }
    }

    startThrottle = () => {
        this.shouldRun = true;
        this.initializeThrottle();
    }

    clearThrottle = () => {
        this.shouldRun = false;
        clearTimeout(this.timeoutId);
    }




}