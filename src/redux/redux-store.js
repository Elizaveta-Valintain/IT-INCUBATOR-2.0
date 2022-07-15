import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunkMiddleware)));
// let store = createStore(profileReducer,dialogsReducer,sidebarReducer);


window.store = store;


export default store
