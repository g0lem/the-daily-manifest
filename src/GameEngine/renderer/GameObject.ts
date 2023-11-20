import { iRenderableObject } from "./primitives/iRenderableObject";
import { Id } from "../utils/Id";
import { PositionalData } from "../composables/PositionalData";
import { Entity } from "./Entity";
import { iRenderableData } from "./renderables/iRenderableData";
import { Stats } from "../utils/Stats";
import { TextRender } from "./renderables/TextRender";


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
    }

    onHover = () => {
        console.log('hover');
    }

    onScroll = () => {
        console.log('scroll');
    }

    render() {
        this.renderableData.render(this.entity!);
    }
}