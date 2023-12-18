import { InputController } from "./controllers/InputController";
import { ResourceLoader } from "./managers/ResourceLoader";
import { Renderer } from "./renderer/Renderer";
import { adjustContext, adjustResolution, adjustScale, getContext } from "./utils/canvas"
import { Resource } from "./managers/Resource";
import { Scene, WorldLoader } from "./managers/WorldLoader";
import { EventController } from "./controllers/EventController";
import { Events } from "./interfaces/Events";
import { Camera } from "./renderer/Camera";



export class Game { 

    private resourceLoader : ResourceLoader;
    private worldLoader : WorldLoader;
    private eventController: EventController;

    private renderer : Renderer;
    private context : CanvasRenderingContext2D;
    private inputController: InputController;

    private camera: Camera;
    
    constructor() {
        this.camera = new Camera(0,0,800,450);
        this.resourceLoader = new ResourceLoader([]);
        this.worldLoader = new WorldLoader(new Map());

        this.renderer = new Renderer(this.camera);
        this.inputController = new InputController(this.renderer);

        this.eventController = new EventController(this.renderer);

        this.context = getContext();
    }

    canvasSetup = () => {
        adjustResolution(this.camera.getSize());
        // adjustScale();
        adjustContext();
    }

    loadResources = () => {         
        this.resourceLoader.fetchAllResources();
    }

    changeScene = (sceneId: string) => {
        this.renderer.clear();
        this.worldLoader.setScene(sceneId);
        this.loadWorld();
    }

    appendResources = (resources: Array<Resource>) => {
        this.resourceLoader.append(resources);
    }

    appendWorld = (sceneId: string, resources: Scene) => {
        this.worldLoader.set(sceneId, resources);
    }

    appendEvents = (resources: Array<Events>) => {
        this.eventController.append(resources);
    }

    loadWorld = () => {
        this.worldLoader.loadWorld(this.renderer, this.resourceLoader);
    }

    drawWorld = () => {
        this.context.clearRect(0,0,800,600);
        this.context.beginPath();
        this.context.moveTo(0,0);
        this.context.lineTo(800,600);
        this.context.stroke();
        this.renderer.render();
    }

    run = () => {
        window.addEventListener("beforeunload", ()=>this.inputController.destroy());
        setInterval(()=> {
            this.drawWorld();
        },1)
    }

}