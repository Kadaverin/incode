import { refreshAuth } from 'actions/auth'
import successAuthHandler from 'helpers/successAuthHandler'

const refreshTokenFromStorage = (store) => {
  const token = localStorage.getItem('token')

  if (token ) {
    successAuthHandler(token, false)
    store.dispatch(refreshAuth(token))
  }
}

export default refreshTokenFromStorage
