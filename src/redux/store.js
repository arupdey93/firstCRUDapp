import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { gameReducer } from './gameData/gameReducer'
import thunkMiddleWare from 'redux-thunk'

const store = createStore(gameReducer,applyMiddleware(thunkMiddleWare,logger))

// store.subscribe(()=>{
//   console.log(store.getState().id)
// })

export default store