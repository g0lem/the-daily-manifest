import { Game } from "./GameEngine/Game";
import { resources, world, events } from './TheDailyManifest';

const game = new Game();

game.canvasSetup();
game.appendResources(resources);
game.loadResources();

game.appendWorld(world);
game.loadWorld();

game.appendEvents(events);

game.run();