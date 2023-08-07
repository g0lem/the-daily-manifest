import './style.css'


const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('app')!;

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
  counter++;
}

setInterval(()=> {
  drawLine();
},0)