import { Vec2 } from "./utils/Vec2";


export interface RenderableObject {
    onClick: ()=>void;
    onHover: ()=>void;
    onScroll: ()=>void;
    render: ()=>void;
    position: Vec2;
}