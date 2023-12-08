import { Game } from "./GameEngine/Game";
import { resources, world2, events } from './TheDailyManifest';

const game = new Game();

game.canvasSetup();
game.appendResources(resources);
game.loadResources();

Object.keys(world2).forEach(key=>{
    game.appendWorld(key, world2[key]);  
})

game.loadWorld();

game.appendEvents(events);

game.run();

window.game = game;