import { Game } from "./GameEngine/Game";
import { resources, world } from './TheDailyManifest';

const game = new Game();

game.canvasSetup();
game.appendResources(resources);
game.loadResources();

game.appendWorld(world);
game.loadWorld();

game.run();