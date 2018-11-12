import axios from 'axios'
import { success, failActionWithType } from 'helpers/actionProcessTemplaters'

const instance = axios.create({
  baseURL: 'https://incode-shop.herokuapp.com/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

const actionRequestsMiddleware = store => next => action => {

  if( !action.request ){
    return next(action)
  }
  
  const { url, method, responseConverter = resp => resp.data } = action.request
  instance.request({
    url,
    method,
    data: action.payload
  })
  .then( (response) => {
    console.log(response)
    store.dispatch({
      type: success(action.type),
      payload: responseConverter(response)
    })
  })
  .catch( (err) => {
    console.log(err)
    store.dispatch(failActionWithType(action.type, err))
  })
  
}

export default actionRequestsMiddleware