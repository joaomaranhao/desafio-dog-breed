import axios from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()

export const api = axios.create({
  baseURL: 'https://dogbreed-api.q9.com.br',
  headers: {
    Authorization: cookies['dogbreed.token']
  }
})
