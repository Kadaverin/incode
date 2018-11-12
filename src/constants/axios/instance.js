import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://incode-shop.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export default instance