import { Stats } from "../RPGEngine/Stats";
import { bGameObject } from "./builders/bGameObject";
import { EventController } from "./controllers/EventController";
import { ResourceLoader } from "./managers/ResourceLoader";
import { Renderer } from "./renderer/Renderer";
import { Vec2 } from "./utils/Vec2";
import { adjustResolution, getContext } from "./utils/canvas"
import { GameObjectTypes } from "./utils/constants";



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
        const gameObj = new bGameObject()
                            .withId('player1')
                            .withType(GameObjectTypes.sprite)
                            .withResourceLoader(this.resourceLoader)
                            .withSpriteName('pokemon')
                            .withPositionalData(0,0,64,64)
                            .build();

        const gameObj2 = new bGameObject()
                            .withId('player2')
                            .withType(GameObjectTypes.sprite)
                            .withResourceLoader(this.resourceLoader)
                            .withSpriteName('pokemon')
                            .withPositionalData(100,100,64,64)
                            .build();

        const gameObj3 = new bGameObject()
                                .withResourceLoader(this.resourceLoader)
                                .withSpriteName('vim')
                                .withPositionalData(50,50,64,64)
                                .build();

        const fontTest = new bGameObject()
                                .withType(GameObjectTypes.text)
                                .withPositionalData(300,300,64,64)
                                .withStats(new Stats())
                                .build();

        const healthBar = new bGameObject()
                            .withType(GameObjectTypes.healthBar)
                            .withPositionalData(200,200,64,64)
                            .withStats(new Stats())
                            .build();

        this.renderer.push(gameObj3!);
        this.renderer.push(gameObj2!);
        this.renderer.push(gameObj!);
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