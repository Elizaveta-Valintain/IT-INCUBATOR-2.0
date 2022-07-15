import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likesCount: 15},
                {id: 2, message: 'Select 2', likesCount: 14},
                {id: 3, message: 'I am, Serhii', likesCount: 52},
                {id: 4, message: 'Pooost', likesCount: 0},
                {id: 5, message: 'Pooost', likesCount: 106}
            ],
            newPostText: 'UA-Serhii&Natali'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Admin'},
                {id: 2, name: 'Fill'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Andrew'},
                {id: 5, name: 'Lexa'},
                {id: 6, name: 'Givy'},
                {id: 7, name: 'dfgh'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'I am Serhii'},
                {id: 3, message: 'YeYoYo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageText: 'UA-Serhii'
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Nata'},
                {id: 2, name: 'Vats'},
                {id: 3, name: 'Zlata'},
                {id: 3, name: 'Zlata'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State change')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
//window.store = store;
