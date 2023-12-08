import { bGameObject } from "./builders/bGameObject";
import { InputController } from "./controllers/InputController";
import { ResourceLoader } from "./managers/ResourceLoader";
import { Renderer } from "./renderer/Renderer";
import { Vec2 } from "./utils/Vec2";
import { adjustResolution, getContext } from "./utils/canvas"
import { GameObjectTypes } from "./utils/constants";
import { Resource } from "./managers/Resource";
import { Scene, SceneMap, WorldLoader, WorldMember } from "./managers/WorldLoader";
import { bStats } from "./builders/bStats";
import { EventController } from "./controllers/EventController";
import { Events } from "./Events";



export class Game { 

    private resourceLoader : ResourceLoader;
    private worldLoader : WorldLoader;
    private eventController: EventController;

    private renderer : Renderer;
    private context : CanvasRenderingContext2D;
    private inputController: InputController;
    
    constructor() {
        this.resourceLoader = new ResourceLoader([]);
        this.worldLoader = new WorldLoader(new Map());

        this.renderer = new Renderer();
        this.inputController = new InputController(this.renderer);

        this.eventController = new EventController(this.renderer);

        this.context = getContext();
    }

    canvasSetup = () => {
        adjustResolution(new Vec2(800, 600));
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
        this.worldLoader.set(sceneId,resources);
    }

    appendEvents = (resources: Array<Events>) => {
        this.eventController.append(resources);
    }

    generateGameObject = (worldMember: WorldMember) => {
        const [posX, posY, sizeX, sizeY] = Object.values(worldMember.positionalData);
        const stats = new bStats().fromWorldMemberStats(worldMember.stats);
        
        return new bGameObject()
                        .withResourceLoader(this.resourceLoader)
                        .withId(worldMember.id)
                        .withType(worldMember.type as GameObjectTypes)
                        .withSpriteName(worldMember.spriteName)
                        .withPositionalData(posX, posY, sizeX, sizeY)
                        .withStats(stats)
                        .build();
    }

    loadWorld = () => {
        this.worldLoader.getCurrentScene()!.forEach((worldMember : WorldMember) => {
            const gameObj = this.generateGameObject(worldMember);

            this.renderer.push(gameObj!);
        })
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