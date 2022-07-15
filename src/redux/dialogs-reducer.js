const ADD_MESSAGES = 'ADD-MESSAGES';

let initReducersTree = {
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
    ]
}

const dialogsReducer = (state = initReducersTree, action) => {

    switch (action.type) {
        case ADD_MESSAGES:
            let newMessages = {
                id: 7,
                message: action.newMessageText
            }

            return {
                ...state,
                messages: [...state.messages, newMessages]
            }

        default:
            return state
    }

}

export let addMessagesActionCreator = (newMessageText) => {
    return (
        {type: ADD_MESSAGES, newMessageText}
    )
}

export default dialogsReducer
