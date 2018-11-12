import { start, success } from 'helpers/actionProcessTemplaters';
import * as types from 'constants/actionTypes';
import * as endpoints from 'constants/routes/api'

// SIGN IN
export const signInRequest = (credentials) => ({
  type: start(types.SIGN_IN),
  payload: credentials,
  request: {
    method: 'POST',
    url: endpoints.signIn
  }
})

export const signInSuccess = (user) => ({
  type: success(types.SIGN_IN),
  payload: user,
})

// SIGN UP
export const signUpRequest = (credentials) => ({
  type: start(types.SIGN_UP),
  payload: credentials,
  request: {
    method: 'POST',
    url: endpoints.signUp
  }
})

export const signUpSuccess = (user) => ({
  type: success(types.SIGN_UP),
  payload: user
})

// LOGOUT
export const logout = () => ({
  type: types.LOGOUT
})