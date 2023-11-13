import { Stats } from "../RPGEngine/Stats";
import { EventController } from "./controllers/EventController";
import { ResourceLoader } from "./loaders/ResourceLoader";
import { GameObject } from "./renderer/GameObject";
import { HealthBar } from "./renderer/HealthBar";
import { PlayerObject } from "./renderer/PlayerObject";
import { Renderer } from "./renderer/Renderer";
import { Text } from "./renderer/primitives/Text";
import { Vec2 } from "./utils/Vec2";
import { adjustResolution, getContext } from "./utils/canvas"



export class Game { 

    private resourceLoader : ResourceLoader;
    private stats : Stats;
    private renderer : Renderer;
    private context : CanvasRenderingContext2D;
    private eventController: EventController;
    
    constructor() {
        this.resourceLoader = new ResourceLoader([]);
        this.stats = new Stats();

        this.renderer = new Renderer();
        this.eventController = new EventController(this.renderer);

        this.context = getContext();
    }

    canvasSetup = () => {
        adjustResolution(new Vec2(800, 600));
    }

    loadResources = () => {
        this.resourceLoader.push({
            key: 'vim',
            source: '/vim.png',
            isCritical: false,
            resourceBlob: new Blob(),
            hasLoaded: false,
            size: new Vec2(16,16),
        })

        this.resourceLoader.push({
            key: 'pokemon',
            source: '/pokemon.png',
            isCritical: false,
            resourceBlob: new Blob(),
            hasLoaded: false,
            size: new Vec2(64,64),
        })
        
         
        this.resourceLoader.fetchAllResources();
    }

    loadWorld = () => {
        const gameObj = new PlayerObject(this.resourceLoader, 'pokemon', new Vec2(0,0), this.stats);
        const gameObj2 = new PlayerObject(this.resourceLoader, 'pokemon', new Vec2(100,100), this.stats);

        const gameObj3 = new GameObject(this.resourceLoader, 'vim', new Vec2(50,50));

        const healthBar = new HealthBar(this.stats);
        const fontTest = new Text(new Vec2(100, 20), "SUP MAN?");

        this.renderer.push(gameObj3);
        this.renderer.push(gameObj2);
        this.renderer.push(gameObj);
        this.renderer.push(healthBar);
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