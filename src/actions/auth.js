import { startActionWithType, successActionWithType, failActionWithType } from 'helpers/actionProcessTemplaters';
import * as types from 'constants/actionTypes/auth';
import * as endpoints from 'constants/routes/api';
import successAuthHandler from 'helpers/successAuthHandler';
import axiosInstance from 'constants/axios/instance';

// SIGN IN
export const signInRequest = (credentials) => dispatch => {
  dispatch( startActionWithType(types.SIGN_IN, credentials) )

  axiosInstance.post( endpoints.signIn, credentials )
  .then( response => {
    successAuthHandler(response.data.token)
    dispatch( successActionWithType(types.SIGN_IN, response.data) )
  })
  .catch(err => {
    console.error(err)
    dispatch( failActionWithType(types.SIGN_IN, err))
  })
}

// SIGN UP
export const signUpRequest = (credentials) => dispatch => {
  dispatch( startActionWithType(types.SIGN_UP, credentials) )

  axiosInstance.post( endpoints.signUp, credentials )
  .then( response => {
    successAuthHandler(response.data.token)
    dispatch( successActionWithType(types.SIGN_UP, response.data) )
  })
  .catch(err => {
    console.error(err)
    dispatch( failActionWithType(types.SIGN_UP, err) )
  })
}

export const getAuthUserRequest = () => dispatch => {
  dispatch( startActionWithType(types.GET_AUTH_USER) )

  axiosInstance.get(endpoints.getAuthUser, { })
  .then( res => {
    dispatch( successActionWithType(types.GET_AUTH_USER, res.data) )
  })
  .catch(err => {
    console.error(err)
    dispatch( failActionWithType(types.GET_AUTH_USER, err) )
  })
}

// Refresh token from local storage to redux
export const refreshAuth = (token) => ({
  type: types.REFRESH_TOKEN_FROM_LOCAL_STORAGE,
  payload: token
})

// LOGOUT
export const logout = () => ({
  type: types.LOGOUT
})