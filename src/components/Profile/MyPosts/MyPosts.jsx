import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let addPost = (values) => {

        props.addPosts(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
                <AddPostProfileRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)

const AddPostProfile = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newPostText"}
                    placeholder={"Enter new post"}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostProfileRedux = reduxForm({
    form: 'profileAddPostMessage'
})(AddPostProfile)

export default MyPosts;
