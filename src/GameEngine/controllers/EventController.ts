import { Events } from "../Events";
import { Renderer } from "../renderer/Renderer";



export class EventController {

    public renderer: Renderer;

    public events : Array<Events> = [];

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    append = (newEvents: Array<Events>) => {
        this.events = [
            ...this.events,
            ...newEvents
        ];

        this.createEventListeners();
    }

    push = (newEvent : Events) => {
        this.events.push(newEvent)
    };

    find = (id: string) => {
        return this.events.find((ev: Events )=> {
            return ev.id === id;
        })!;
    }

    createEventListeners = () => {
        this.events.forEach(cEvent => {
            const {
                id,
            } = cEvent;
            document.body.addEventListener(id, (e)=> {
                console.log(e);
                this.createEventListenerFromEvents(cEvent);
            }, false)
        })
    }

    createEventListenerFromEvents = (cEvent: Events) => {
        const {
            id,
            target, 
            deps,
        } = cEvent;
        const event = this.find(id);

        const targetEntity = this.renderer.findById(target)!;
        const depEntities = deps.map((dep) => this.renderer.findById(dep)!);

        event.handler(targetEntity, depEntities);
    }


    

}