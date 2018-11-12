import { start, success, fail } from 'helpers/actionProcessTemplaters'
import * as types from 'constants/actionTypes/auth'

const initialState = {
  user: {},
  token: null
}

const auth = (state = initialState, action) => {
  switch(action.type){
    case( success(types.SIGN_IN) ): 
      return {
        ...state, 
        token: action.payload.token
      }
    
    case( success(types.GET_AUTH_USER) ):
      return {
        ...state,
        user: action.payload
      }
    
    default: return state
  }
}

export default auth