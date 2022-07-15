import {usersApi} from "../api/usersAPI";
import {followAPI} from "../api/followAPI";

const SET_USERS = 'SET_USERS'
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initReducersTree = {
    users: [], pageTotalCount: 0, pageSizeView: 5, pageCurrent: 1, isFetching: false, followingInProgress: []
}

const usersReducer = (state = initReducersTree, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, pageCurrent: action.pageCurrent
            }
        case SET_TOTAL_PAGE:
            return {
                ...state, pageTotalCount: action.pageTotalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default :
            return state
    }
}

export let followSuccess = (userId) => {
    return {type: FOLLOW_SUCCESS, userId}
}
export let unfollowSuccess = (userId) => {
    return {type: UNFOLLOW_SUCCESS, userId}
}
export let setUsers = (users) => {
    return {type: SET_USERS, users}
}
export let setPageCurrent = (setCurrentPage) => {
    return {type: SET_CURRENT_PAGE, pageCurrent: setCurrentPage}
}

export let setTotalPage = (pageTotalCount) => {
    return {type: SET_TOTAL_PAGE, pageTotalCount}
}

export let toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export let toggleFollowingInProgress = (followingInProgress, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId}
}

export const  requestUsers = (page, pageSizeView) => (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersApi.getUsersDefault(page, pageSizeView)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalPage(data.totalCount))
        })
}

export const getNewUsersPage = (pageNumber, pageSizeView) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setPageCurrent(pageNumber))
    usersApi.getUsersChangePage(pageNumber, pageSizeView)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}


export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    followAPI.setUnFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    followAPI.setFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingInProgress(false, userId))
        })
}

export default usersReducer;
