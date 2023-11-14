import { Game } from "./GameEngine/Game";



const game = new Game();

game.canvasSetup();
game.loadResources();
game.loadWorld();

game.run();