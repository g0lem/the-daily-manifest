import { Stats } from "./utils/Stats";
import { bGameObject } from "./builders/bGameObject";
import { EventController } from "./controllers/EventController";
import { ResourceLoader } from "./managers/ResourceLoader";
import { Renderer } from "./renderer/Renderer";
import { Vec2 } from "./utils/Vec2";
import { adjustResolution, getContext } from "./utils/canvas"
import { GameObjectTypes } from "./utils/constants";
import { Resource } from "./managers/Resource";
import { WorldLoader, WorldMember } from "./managers/WorldLoader";
import { bStats } from "./builders/bStats";



export class Game { 

    private resourceLoader : ResourceLoader;
    private worldLoader : WorldLoader;

    private stats : Stats;
    private renderer : Renderer;
    private context : CanvasRenderingContext2D;
    private eventController: EventController;
    
    constructor() {
        this.resourceLoader = new ResourceLoader([]);
        this.worldLoader = new WorldLoader([]);
        this.stats = new Stats();

        this.renderer = new Renderer();
        this.eventController = new EventController(this.renderer);

        this.context = getContext();
    }

    canvasSetup = () => {
        adjustResolution(new Vec2(800, 600));
    }

    loadResources = () => {         
        this.resourceLoader.fetchAllResources();
    }

    appendResources = (resources: Array<Resource>) => {
        this.resourceLoader.append(resources);
    }

    appendWorld = (resources: Array<WorldMember>) => {
        this.worldLoader.append(resources);
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

        this.worldLoader.resourceList.forEach((worldMember : WorldMember) => {
            const gameObj = this.generateGameObject(worldMember);

            this.renderer.push(gameObj!);
        })


        const fontTest = new bGameObject()
                                .withType(GameObjectTypes.text)
                                .withPositionalData(300,300,64,64)
                                .withStats(new Stats())
                                .build();

        this.renderer.push(fontTest);
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
        window.addEventListener("beforeunload", ()=>this.eventController.destroy());
        setInterval(()=> {
            this.drawWorld();
        },1)
    }

}