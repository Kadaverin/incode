import { success, start, fail } from 'helpers/actionProcessTemplaters'
import * as types from 'constants/actionTypes/auth'

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  errorResponse: null
}

const auth = (state = initialState, action) => {
  switch(action.type){
    case( success(types.SIGN_IN) ): 
    case( success(types.SIGN_UP) ):
      return {
        user: {},
        isLoading: false, 
        isAuth: true,
      }
    
    case( success(types.GET_AUTH_USER) ):
      return {
        isLoading: false,
        user: action.payload,
        isAuth: true
      }

    case( start(types.GET_AUTH_USER) ):
    case( start(types.SIGN_IN) ):
    case( start(types.SIGN_UP) ):
      return {
        ...state,
        isLoading: true
      }

    case( fail(types.GET_AUTH_USER) ):
      return {
        ...state,
        isLoading: false
      }

    case( fail(types.SIGN_IN) ):
    case( fail(types.SIGN_UP) ):
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error
      }

    case( types.CLEAR_AUTH_ERRORS ): 
      return {
        ...state,
        errorResponse: null
      }
    
    default: return state
  }
}

export default auth