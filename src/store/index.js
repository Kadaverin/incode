import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createRootReducer from 'reducers'

export default function configureStore (history) {

  const enhancers = [

  ]

  const middlewares = [
   routerMiddleware(history),
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
