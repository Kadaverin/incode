import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';

import createRootReducer from 'reducers'

export default function configureStore (history) {

  const enhancers = [

  ]

  const middlewares = [
   routerMiddleware(history),
   thunk
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const composedEnhancers = composeEnhancers(
    applyMiddleware(...middlewares),
    ...enhancers
  )

  const store = createStore(
    createRootReducer(history),
    composedEnhancers
  )

  return store
}
