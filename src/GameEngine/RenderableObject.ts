import { Vec2 } from "./utils/Vec2";


export interface RenderableObject {
    render: ()=>void;
    position: Vec2;
}