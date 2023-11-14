import { iRenderableObject } from "./renderer/primitives/iRenderableObject";

export interface Events {
    id: string;
    key: string;
    target: string;
    deps: Array<string>;
    handler: (target: iRenderableObject, deps: Array<iRenderableObject>) => void;
}