import { PositionalData } from "../../composables/PositionalData";
import { Id } from "../../utils/Id";
import { Vec2 } from "../../utils/Vec2";


export interface iRenderableObject {
    onClick: ()=>void;
    onHover: ()=>void;
    onScroll: ()=>void;
    render: ()=>void;
    positionalData: PositionalData;
    id: Id;
    visible: boolean;
}