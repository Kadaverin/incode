import axiosInstance from 'constants/axios/instance';

const successAuthHandler = (token, saveToken = true) => {
  saveToken && localStorage.setItem('token', token)
  axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + token
}

export default successAuthHandler