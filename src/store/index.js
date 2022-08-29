import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from "./reducers/user"

const rootReducer = combineReducers({
  user: userReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store
