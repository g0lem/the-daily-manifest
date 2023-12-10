import { iRenderableObject } from "./primitives/iRenderableObject";
import { Id } from "../utils/Id";
import { PositionalData } from "../composables/PositionalData";
import { Entity } from "./Entity";
import { iRenderableData } from "./renderables/iRenderableData";
import { Stats } from "../utils/Stats";
import { TextRender } from "./renderables/TextRender";
import { Camera } from "./Camera";


export class GameObject implements iRenderableObject {

    public renderableData : iRenderableData = new TextRender();

    public visible = true;

    public entity : Entity = new Entity();

    constructor() {
    }

    setStats = (stats: Stats) => this.entity.setStats(stats);


    setId = (id: Id) => this.entity.setId(id);

    
    setRenderableData = 
        (renderableData: iRenderableData) => this.renderableData = renderableData;
    

    setVisible = (visible: boolean) => this.visible = visible;

    setPositionalData = 
        (positionalData: PositionalData) => this.entity.setPositionalData(positionalData);

    listenForKeyPresses = () => {
    }

    onClick = () => {
        console.log('click');
        const event = new Event("moveUp");

        const element = document.body;

        element.dispatchEvent(event);
    }

    onHover = () => {
        console.log(this.entity.id.getId());
    }

    onScroll = () => {
        console.log('scroll');
    }

    render(camera: Camera) {
        this.renderableData.render(this.entity!, camera!);
    }
}