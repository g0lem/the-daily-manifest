import { Renderer } from "../renderer/Renderer";
import { KeyPressController } from "./KeyPressController";
import { MouseController } from "./MouseController";


export class InputController {
    private mouseController : MouseController;
    private keyPressController : KeyPressController;
    
    constructor(renderer : Renderer) {
        this.mouseController = new MouseController(renderer);
        this.keyPressController = new KeyPressController(renderer);

        this.listen();
    }

    listen() {
        this.keyPressController.listen();
    }

    destroy() {
        this.mouseController.destroy();
    }
}
