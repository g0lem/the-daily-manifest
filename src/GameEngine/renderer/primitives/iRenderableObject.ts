import { Vec2 } from "../../utils/Vec2";


export interface iRenderableObject {
    onClick: ()=>void;
    onHover: ()=>void;
    onScroll: ()=>void;
    render: ()=>void;
    position: Vec2;
    size: Vec2;
}