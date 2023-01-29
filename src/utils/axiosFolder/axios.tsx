import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://localhost:7062',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})
