import { iRenderableObject } from "./primitives/iRenderableObject";
import { Id } from "../utils/Id";
import { PositionalData } from "../composables/PositionalData";
import { Entity } from "./Entity";
import { iRenderableData } from "./renderables/iRenderableData";


export class GameObject implements iRenderableObject {
    public positionalData: PositionalData;

    public renderableData : iRenderableData;

    public visible = true;

    public id : Id;

    public entity : Entity;

    constructor(id: Id, renderableData: iRenderableData, positionalData: PositionalData) {

        this.entity = new Entity(id, positionalData);

        this.id = id;

        this.renderableData = renderableData;
        this.positionalData = positionalData;
    }

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
        this.renderableData.render(this.entity);
    }
}