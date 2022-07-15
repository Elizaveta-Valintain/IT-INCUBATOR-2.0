import {authApi} from "../api/authAPI";
import {stopSubmit} from "redux-form";

const SET_USER_DATE = 'SET_USER_DATE'

const initReducersTree = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const AuthReducer = (state = initReducersTree, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload
            }


        default:
            return state
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATE,
    payload: {userId, login, email, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    return authApi.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe)
        .then(data => {

            switch (data.resultCode) {
                case 0: {
                    dispatch(getAuthUserData())
                    break
                }
                case 10: {
                    let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
                    dispatch(stopSubmit("login", {_error: message}))
                    break;
                }
                case 1: {
                    let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
                    dispatch(stopSubmit("login", {_error: message}))
                    break
                }
                default:
                    alert(data.resultCode)


            }

            // if (data.resultCode === 0) {
            //     dispatch(getAuthUserData())
            // }

        })
}

export const logout = () => (dispatch) => {
    authApi.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default AuthReducer;
