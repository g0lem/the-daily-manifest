import { Entity } from "../Entity";
import { iRenderableData } from "../renderables/iRenderableData";

export interface iRenderableObject {
    onClick: ()=>void;
    onHover: ()=>void;
    onScroll: ()=>void;
    renderableData: iRenderableData;
    render: ()=>void;
    entity: Entity;
}