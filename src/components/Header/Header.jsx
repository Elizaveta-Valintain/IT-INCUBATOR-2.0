import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = React.memo((props) => {

    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg' alt='img header'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div>
                    : <NavLink to={'login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    );
})

export default Header;
