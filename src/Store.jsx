import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductDetailsReducer, ProductReducer } from "./assets/Components/Services/Reducers/ProductReducer";
import { UserReducer, UpdateUserReducer } from "./assets/Components/Services/Reducers/UserReducer";

const reducers = combineReducers({ ProductReducer, ProductDetailsReducer, UserReducer, UpdateUserReducer })
let initialState = {}
const middleWare = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store