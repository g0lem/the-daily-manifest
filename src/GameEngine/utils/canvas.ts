import { Vec2 } from "./Vec2";

export const getCanvasHTMLElement = () => <HTMLElement>document.getElementById('app')!;

export const getCanvas = () => <HTMLCanvasElement>document.getElementById('app')!

export const getContext = () => getCanvas().getContext('2d')!

export const adjustResolution : (size : Vec2) => void = (size : Vec2) => {
    const element = getCanvas();
    element.width = size.x;
    element.height = size.y;
}

export const adjustScale = () => {
    const element = getCanvasHTMLElement();
    element.style.scale = '5';
}
  