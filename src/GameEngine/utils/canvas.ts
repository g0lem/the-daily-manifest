
export const getCanvasHTMLElement = () => <HTMLElement>document.getElementById('app')!;

export const getCanvas = () => <HTMLCanvasElement>document.getElementById('app')!

export const getContext = () => getCanvas().getContext('2d')!