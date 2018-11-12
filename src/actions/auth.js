import { start, success } from 'helpers/actionProcessTemplaters';
import * as types from 'constants/actionTypes';

// SIGN IN
export const signInRequest = (credentials) => ({
  type: start(types.SIGN_IN),
  payload: credentials
})

export const signInSuccess = (user) => ({
  type: success(types.SIGN_IN),
  payload: user
})

// SIGN UP
export const signUpRequest = (credentials) => ({
  type: start(types.SIGN_UP),
  payload: credentials
})

export const signUpSuccess = (user) => ({
  type: success(types.SIGN_UP),
  payload: user
})

// LOGOUT
export const logout = () => ({
  type: types.LOGOUT
})