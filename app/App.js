import { FavoritesController } from "./Controllers/FavoritesController.js";
import { NasaController } from "./Controllers/NasaController.js";

class App {
  nasaController = new NasaController()
  favoritesController = new FavoritesController()
}

window["app"] = new App();
