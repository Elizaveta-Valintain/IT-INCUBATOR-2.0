import React from "react";
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? `${style.activeLink}` : '';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.activeLink}`}>
                <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" className={setActive}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" className={setActive}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" className={setActive}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/login" className={setActive}>Login</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" className={setActive}>Settings</NavLink>
            </div>

            <hr/>


            Block Friends
            <div className={style.pip}>
                <div className={style.item}>
                    <NavLink to='/friends' className={setActive}>Friends</NavLink>
                </div>

                <div className={style.friends}>
                    {/*{navBarElementsFriends}*/}
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
