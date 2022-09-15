import { appState } from "../AppState.js";
import { Fave } from "../Models/Fave.js";
import { sandboxServer } from "./AxiosService.js"

class FavoritesService {
  async removeFave(id) {
    const res = await sandboxServer.delete('api/jeremy/apods/' + id)
    console.log(res.data);
    appState.faves = appState.faves.filter(f => f.id !== id)
  }
  async getSavedApods() {
    const res = await sandboxServer.get('api/jeremy/apods')
    console.log('getting saved apods', res.data);
    // NOTE res.data is an array, we need to map
    appState.faves = res.data.map(f => new Fave(f))
  }
  async saveApod() {
    const res = await sandboxServer.post('api/jeremy/apods', appState.nasaApod)
    console.log(res.data);
    // NOTE res.data is an object, no need to map
    appState.faves = [...appState.faves, new Fave(res.data)]
  }

}

export const favoritesService = new FavoritesService()