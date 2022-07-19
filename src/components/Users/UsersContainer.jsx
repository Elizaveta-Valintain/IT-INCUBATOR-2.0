import React from "react";
import {connect} from "react-redux";
import {
    requestUsers, getNewUsersPage, unfollow, follow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
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
        const {pageCurrent, pageSizeView, requestUsers} = this.props
        requestUsers(pageCurrent, pageSizeView)
    }

    onPageChanged = (pageNumber) => {
        const {pageSizeView, getNewUsersPage} = this.props
        getNewUsersPage(pageNumber, pageSizeView)
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

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageTotalCount: getPageTotalCount(state),
        pageSizeView: getPageSize(state),
        pageCurrent: getPageCurrent(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {requestUsers, getNewUsersPage, unfollow, follow, getUsers: requestUsers})
)(UsersContainer)
