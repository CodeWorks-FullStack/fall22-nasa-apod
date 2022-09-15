import { appState } from "../AppState.js";
import { favoritesService } from "../Services/FavoritesService.js";
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js";

function _drawFaves() {
  let template = ''
  appState.faves.forEach(f => template += f.Template)
  setHTML('faves', template)
}

export class FavoritesController {
  constructor () {
    this.getSavedApods()
    appState.on('faves', _drawFaves)
  }
  async getSavedApods() {
    try {
      await favoritesService.getSavedApods()
    } catch (error) {
      console.error('[savedApods]', error)
      Pop.error(error.message)
    }
  }

  async saveApod() {
    try {
      await favoritesService.saveApod()
    } catch (error) {
      console.error('[saveApod]', error)
      Pop.error(error.message)
    }
  }

  async removeFave(id) {

    try {
      if (await Pop.confirm()) {
        await favoritesService.removeFave(id)
      }
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}