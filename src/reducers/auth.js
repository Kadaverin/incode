import { success, start, fail } from 'helpers/actionProcessTemplaters'
import * as types from 'constants/actionTypes/auth'

const initialState = {
  user: {},
  isAuth: false,
  isAuthorizing: false,
  isUserLoading: false,
  errorResponse: null
}

const auth = (state = initialState, action) => {
  switch(action.type){
    case( success(types.SIGN_IN) ): 
    case( success(types.SIGN_UP) ):
      return {
        user: {},
        isAuthorizing: false, 
        isAuth: true,
      }
    
    case( success(types.GET_AUTH_USER) ):
      return {
        isUserLoading: false,
        user: action.payload,
        isAuth: true
      }

    case( start(types.GET_AUTH_USER) ):
      return {
        ...state,
        isUserLoading: true
      }

    case( start(types.SIGN_IN) ):
    case( start(types.SIGN_UP) ):
      return {
        ...state,
        isAuthorizing: true
      }


    case( fail(types.GET_AUTH_USER) ):
      return {
        ...state,
        isUserLoading: false
      }

    case( fail(types.SIGN_IN) ):
    case( fail(types.SIGN_UP) ):
      return {
        ...state,
        isAuthorizing: false,
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