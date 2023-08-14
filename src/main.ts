import { GameObject } from './GameEngine/GameObject';
import { ResourceLoader } from './GameEngine/ResourceLoader';
import { Sprite } from './GameEngine/Sprite';
import { Vec2 } from './GameEngine/Vec2';


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

const context : CanvasRenderingContext2D = canvas.getContext('2d')!;

let counter : number = 0;
let timer : number = Date.now();

const drawLine : ()=>void = () => {
  if(Date.now() - timer > 1000) {
    console.log(counter);
    timer = Date.now();
    counter = 0;
  }
  context.clearRect(0,0,300,300);
  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(300,300);
  context.stroke();
  gameObj.render(context);
  counter++;
}

setInterval(()=> {
  drawLine();
},0)