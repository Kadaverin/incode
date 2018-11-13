import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://incode-shop.herokuapp.com/'
})

const token = localStorage.getItem('token')

if(token){
  instance.defaults.headers['Authorization'] = 'Bearer ' + token
}

export default instance