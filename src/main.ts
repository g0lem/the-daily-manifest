import { Entities } from './GameEngine/Entities';
import { GameObject } from './GameEngine/GameObject';
import { ResourceLoader } from './GameEngine/ResourceLoader';
import { Text } from './GameEngine/Text';
import { Vec2 } from './GameEngine/Vec2';
import { EventController } from './GameEngine/controllers/EventController';


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
    },
]);

resourceLoader.fetchAllResources();

const gameObj = new GameObject(resourceLoader, 'vim', new Vec2(0,0));
const entities = new Entities();
entities.push(gameObj);

const context : CanvasRenderingContext2D = canvas.getContext('2d')!;

let counter : number = 0;
let timer : number = Date.now();


context.font = "30px Brush Script MT, cursive";
context.strokeText("Hello World", 10, 50); 

const fontTest = new Text(new Vec2(20, 20), "SUP MAN?");

const eventController = new EventController(entities);

const drawLine : ()=>void = () => {
  if(Date.now() - timer > 1000) {
    // console.log(counter);
    timer = Date.now();
    counter = 0;
  }
  context.clearRect(0,0,300,300);
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(300,300);
  context.stroke();
  entities.render();
  fontTest.render();
  counter++;
}

setInterval(()=> {
  drawLine();
},0)