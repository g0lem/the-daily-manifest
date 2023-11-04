import { Vec2 } from "./Vec2";


export interface RenderableObject {
    render: ()=>void;
    position: Vec2;
}