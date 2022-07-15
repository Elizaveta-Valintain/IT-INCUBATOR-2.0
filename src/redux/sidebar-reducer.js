let initReducersTree = {
    friends: [
        {id: 1, name: 'Nata'},
        {id: 2, name: 'Vats'},
        {id: 3, name: 'Zlata'},

    ]
}

const sidebarReducer = (state = initReducersTree, action) => {

    switch (action.type) {
        case 'Test':
            return state
        default:
            return state
    }

    // return state
}

export default sidebarReducer
