import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import usersPhoto from "../common/murka.jpg";

const User = React.memo(({user, followingInProgress, follow, unfollow}) => {
    console.log(user)
    return (
        <div>
            <div className={style.item}>
                <div>
                    <div>
                        <NavLink to={`/profile/` + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : usersPhoto} alt={""}/>
                        </NavLink>
                    </div>

                    <div>
                        {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)}
                                                 onClick={() => {
                                                     unfollow(user.id)
                                                 }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>
                        }
                    </div>
                </div>


                <div className={style.left}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>


                <div className={style.right}>
                    <div>{user.id + " user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                </div>


            </div>
        </div>)

})

export default User;
