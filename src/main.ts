import { Animation } from './GameEngine/renderer/Animation';
import { Renderer } from './GameEngine/renderer/Renderer';
import { GameObject } from './GameEngine/renderer/GameObject';
import { HealthBar } from './GameEngine/renderer/HealthBar';
import { PlayerObject } from './GameEngine/renderer/PlayerObject';
import { ResourceLoader } from './GameEngine/loaders/ResourceLoader';
import { Text } from './GameEngine/renderer/primitives/Text';
import { Vec2 } from './GameEngine/utils/Vec2';
import { EventController } from './GameEngine/controllers/EventController';
import { Stats } from './RPGEngine/Stats';


const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('app')!;

const adjustResolution : (element: HTMLCanvasElement, size : Vec2) => void = (element: HTMLCanvasElement, size : Vec2) => {
  element.width = size.x;
  element.height = size.y;
}


setTimeout(()=>{
    adjustResolution(canvas, new Vec2(800,600));
}, 1000);

const resourceLoader = new ResourceLoader([
    {
        key: 'vim',
        source: '/vim.png',
        isCritical: false,
        resourceBlob: new Blob(),
        hasLoaded: false,
        size: new Vec2(16,16),
    },
    {
      key: 'pokemon',
      source: '/pokemon.png',
      isCritical: false,
      resourceBlob: new Blob(),
      hasLoaded: false,
      size: new Vec2(64,64),
    },
]);

resourceLoader.fetchAllResources();

const stats = new Stats();

const gameObj = new PlayerObject(resourceLoader, 'pokemon', new Vec2(0,0), new Animation(new Vec2(0,0), new Vec2(64,64)), stats);
const gameObj2 = new PlayerObject(resourceLoader, 'pokemon', new Vec2(100,100), new Animation(new Vec2(0,0), new Vec2(64,64)), stats);

const gameObj3 = new GameObject(resourceLoader, 'vim', new Vec2(50,50), null);

const healthBar = new HealthBar(stats);


const fontTest = new Text(new Vec2(100, 20), "SUP MAN?");

const renderer = new Renderer();
renderer.push(gameObj3);
renderer.push(gameObj2);
renderer.push(gameObj);
renderer.push(healthBar);
renderer.push(fontTest);

const context : CanvasRenderingContext2D = canvas.getContext('2d')!;

let counter : number = 0;
let timer : number = Date.now();


context.font = "30px Brush Script MT, cursive";
context.strokeText("Hello World", 10, 50); 
context.imageSmoothingEnabled= false;

const eventController = new EventController(renderer);

const drawLine : ()=>void = () => {
  if(Date.now() - timer > 1000) {
    // console.log(counter);
    timer = Date.now();
    counter = 0;
  }
  context.clearRect(0,0,800,600);
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(800,600);
  context.stroke();
  renderer.render();
  counter++;
}

setInterval(()=> {
  drawLine();
},1)

window.addEventListener("beforeunload", ()=>eventController.destroy());