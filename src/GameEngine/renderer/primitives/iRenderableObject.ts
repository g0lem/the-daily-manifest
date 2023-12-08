import { Camera } from "../Camera";
import { Entity } from "../Entity";
import { iRenderableData } from "../renderables/iRenderableData";

export interface iRenderableObject {
    onClick: ()=>void;
    onHover: ()=>void;
    onScroll: ()=>void;
    renderableData: iRenderableData;
    render: (camera: Camera)=>void;
    entity: Entity;
}