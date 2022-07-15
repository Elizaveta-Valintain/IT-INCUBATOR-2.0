import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://p4.wallpaperbetter.com/wallpaper/708/78/484/avatar-blue-face-fantasy-wallpaper-preview.jpg'
                alt='post img'/>
            <div>{props.message}</div>

            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;
