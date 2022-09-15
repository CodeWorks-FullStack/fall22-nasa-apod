import { appState } from "../AppState.js";
import { nasaService } from "../Services/NasaService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawPicture() {
  let apod = appState.nasaApod
  document.querySelector('body').style.backgroundImage = `url(${apod.hdurl})`
  setText('copyright', apod.copyright)
  setHTML('details', apod.DetailsTemplate)
}

function _setDate(date) {
  if (!date) {
    let isoDate = new Date().toISOString()
    date = isoDate.substring(0, 10)
  }
  console.log(date);
  let datePicker = document.getElementById('space-dawg')
  // @ts-ignore
  datePicker.value = date
  // @ts-ignore
  datePicker.max = date
}

export class NasaController {
  constructor () {
    this.getNasaApod()
    _setDate()
    appState.on('nasaApod', _drawPicture)
  }

  async getNasaApod() {
    try {
      await nasaService.getNasaApod()
    } catch (error) {
      console.error('[getNasaApod]', error)
      Pop.error(error.message)
    }
  }

  async getNasaApodByDate(date) {
    try {
      let dateInput = window.event.target
      // @ts-ignore
      // console.log(date.value);
      // @ts-ignore
      if (!date) {
        // @ts-ignore
        await nasaService.getNasaApodByDate(dateInput.value)
      }
      else {
        // @ts-ignore
        _setDate(date)
        await nasaService.getNasaApodByDate(date)
      }
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}