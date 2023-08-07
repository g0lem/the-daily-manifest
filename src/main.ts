import './style.css'


const canvas : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('app')!;

const context : CanvasRenderingContext2D = canvas.getContext('2d')!;

context.beginPath();
context.moveTo(0,0);
context.lineTo(300,300);
context.stroke();