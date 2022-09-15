export class Fave {
  constructor (data) {
    this.id = data.id
    this.imgUrl = data.imgUrl
    this.date = data.date
    this.user = data.user
  }
  get Template() {
    return `
    <div class="col-12 p-3">
      <img onclick="app.nasaController.getNasaApodByDate('${this.date}')" src="${this.imgUrl}" class="img-fluid selectable"
        alt="">
      <div>${this.date} <i onclick="app.favoritesController.removeFave('${this.id}')" title="Delete Fave" class="mdi mdi-delete text-danger selectable ms-3"></i> </div>
    </div>
  `
  }

}