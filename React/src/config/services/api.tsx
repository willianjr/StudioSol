import axios from 'axios'

const api = axios.create({
  baseURL: 'https://us-central1-ss-devops.cloudfunctions.net/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
