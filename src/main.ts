import { Animation } from './GameEngine/Animation';
import { Entities } from './GameEngine/Entities';
import { GameObject } from './GameEngine/GameObject';
import { HealthBar } from './GameEngine/HealthBar';
import { PlayerObject } from './GameEngine/PlayerObject';
import { ResourceLoader } from './GameEngine/ResourceLoader';
import { Text } from './GameEngine/Text';
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

const entities = new Entities();
entities.push(gameObj3);
entities.push(gameObj2);
entities.push(gameObj);
entities.push(healthBar);

const context : CanvasRenderingContext2D = canvas.getContext('2d')!;

let counter : number = 0;
let timer : number = Date.now();


context.font = "30px Brush Script MT, cursive";
context.strokeText("Hello World", 10, 50); 
context.imageSmoothingEnabled= false;

const fontTest = new Text(new Vec2(100, 20), "SUP MAN?");

const eventController = new EventController(entities);

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
  entities.render();
  fontTest.render();
  counter++;
}

setInterval(()=> {
  drawLine();
},1)

window.addEventListener("beforeunload", ()=>eventController.destroy());