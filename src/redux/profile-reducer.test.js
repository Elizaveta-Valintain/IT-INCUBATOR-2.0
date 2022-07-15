import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'How are you?', likesCount: 15},
        {id: 2, message: 'Select 2', likesCount: 14},
        {id: 3, message: 'I am, Serhii', likesCount: 52},
        {id: 4, message: 'Pooost', likesCount: 0}
    ]
}

it('length of post should be incremented', () => {
    let action = addPostActionCreator('some post text')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {
    let action = addPostActionCreator('some post text')
    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('some post text')
})

test('after deleting length of messages should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    //3 expectation
    expect(newState.posts.length).toBe(3)
})


