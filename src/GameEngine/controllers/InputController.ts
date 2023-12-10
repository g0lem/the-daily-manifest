import { WorldLoader } from "../managers/WorldLoader";
import { Renderer } from "../renderer/Renderer";
import { KeyPressController } from "./KeyPressController";
import { MouseController } from "./MouseController";


export class InputController {
    private mouseController : MouseController;
    private keyPressController : KeyPressController;
    private renderer : Renderer;
    
    constructor(renderer : Renderer) {
        this.mouseController = new MouseController(renderer);
        this.keyPressController = new KeyPressController(renderer);
        this.renderer = renderer;
    }

    destroy() {
        this.mouseController.destroy();
    }
}
