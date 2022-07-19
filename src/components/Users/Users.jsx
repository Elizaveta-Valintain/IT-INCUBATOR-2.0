import React from "react";
import Pagination from "../common/Paginator/Pagination";
import User from "./User";

const Users = React.memo(({
                              pageCurrent, onPageChanged, pageTotalCount, pageSizeView, users, followingInProgress,
                              unfollow, follow, ...props
                          }) => {

    return (<div>
        <Pagination
            pageCurrent={pageCurrent}
            onPageChanged={onPageChanged}
            pageTotalCount={pageTotalCount}
            pageSizeView={pageSizeView}
        />
        {users.map(u => <User
            user={u}
            key={u.id}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
        />)}

    </div>)
})

export default Users
