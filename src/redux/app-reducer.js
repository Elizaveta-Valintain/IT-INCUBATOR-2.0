import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initReducersTree = {
    initialized: false
}

const appReducer = (state = initReducersTree, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => async (dispatch) => {
    let promise = dispatch(getAuthUserData())

    await Promise.all([promise])
        // .then(() => {
        dispatch(initializedSuccess())
    // })
}

export default appReducer;
