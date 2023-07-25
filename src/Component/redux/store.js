import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from './reduce'

import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from 'redux-thunk'
const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(rootReducer, composeEnhancer)

export default store