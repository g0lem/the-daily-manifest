import { Camera } from "../renderer/Camera";
import { Entity } from "../renderer/Entity";
import { iRenderableData } from "../interfaces/iRenderableData";

export interface iRenderableObject {
    onClick: ()=>void;
    onHover: ()=>void;
    onScroll: ()=>void;
    renderableData: iRenderableData;
    render: (camera: Camera)=>void;
    entity: Entity;
}