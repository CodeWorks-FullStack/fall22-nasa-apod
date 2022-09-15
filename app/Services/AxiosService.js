// @ts-ignore
export const nasaServer = new axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 4000,
  params: { api_key: 'w587nM7wFTtxxIgueRbxzuByVObMKcbUUKAwh24b' }
})

// @ts-ignore
export const sandboxServer = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 4000,
})