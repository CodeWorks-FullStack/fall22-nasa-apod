export class NasaApod {
  constructor (data) {
    this.title = data.title
    this.date = data.date
    this.explanation = data.explanation
    this.copyright = data.copyright || 'NASA'
    this.hdurl = data.hdurl
    this.imgUrl = data.url
  }

  get DetailsTemplate() {
    return /*html*/`
    <div class="col-6 m-auto text-shadow">
    <p class="on-hover">${this.explanation}</p>
      <h1>${this.title}</h1>
      <h2>${this.date}</h2>
    </div>
    `
  }
}