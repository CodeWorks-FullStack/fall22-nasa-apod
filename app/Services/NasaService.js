import { appState } from "../AppState.js";
import { NasaApod } from "../Models/NasaApod.js";
import { nasaServer } from "./AxiosService.js"

class NasaService {
  async getNasaApod() {
    const res = await nasaServer.get()
    console.log('getNasaApod', res.data);
    // NOTE stop mapping over objects please.
    appState.nasaApod = new NasaApod(res.data)
    console.log('AppState:', appState.nasaApod);
  }

  async getNasaApodByDate(date) {
    const res = await nasaServer.get('', { params: { date } })
    console.log(res.data)
    appState.nasaApod = new NasaApod(res.data)
  }

}

export const nasaService = new NasaService()