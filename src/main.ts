import './style.css'


class Vec2 {
  public x : number;
  public y : number;

  constructor(x : number, y : number) {
    this.x = x;
    this.y = y;
  }

}


const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('app')!;

const adjustResolution : (element: HTMLCanvasElement, size : Vec2) => void = (element: HTMLCanvasElement, size : Vec2) => {
  element.width = size.x;
  element.height = size.y;
}





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