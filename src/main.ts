import { Game } from "./GameEngine/Game";
import { resources, world, events } from './TheDailyManifest';

const game = new Game();

game.canvasSetup();
game.appendResources(resources);
game.loadResources();

Object.keys(world).forEach(key=>{
    game.appendWorld(key, world[key]);  
})

game.loadWorld();

game.appendEvents(events);

game.run();

window.game = game;