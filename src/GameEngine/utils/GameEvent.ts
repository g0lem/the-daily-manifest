import { GameObject } from "../renderer/GameObject"



export type GameEvent = {
    id: string,
    target: string,
    deps: Array<string>,
    handler: (target: GameObject, deps: Array<GameObject>) => void
}