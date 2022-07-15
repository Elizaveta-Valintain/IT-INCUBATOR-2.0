import React from "react";
import {connect} from "react-redux";
import {
    requestUsers, getNewUsersPage, unfollow, follow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getFollowingInProgress,
    getIsFetching,
    getPageCurrent,
    getPageSize,
    getPageTotalCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.PureComponent {

    componentDidMount() {
        this.props.requestUsers(this.props.pageCurrent, this.props.pageSizeView)
    }

    onPageChanged = (pageNumber) => {
        this.props.getNewUsersPage(pageNumber, this.props.pageSizeView)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                pageTotalCount={this.props.pageTotalCount}
                pageSizeView={this.props.pageSizeView}
                pageCurrent={this.props.pageCurrent}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}

            />
        </>
    }


}

/*
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageTotalCount: state.usersPage.pageTotalCount,
        pageSizeView: state.usersPage.pageSizeView,
        pageCurrent: state.usersPage.pageCurrent,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}
*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageTotalCount: getPageTotalCount(state),
        pageSizeView: getPageSize(state),
        pageCurrent: getPageCurrent(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
   //     isAuth: getIsAuth(state)
    }
}

export default compose(
   // withAuthRedirect,
    connect(mapStateToProps,{requestUsers, getNewUsersPage, unfollow, follow })
) (UsersContainer)
