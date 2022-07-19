import React from 'react';
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './../common/FormsControl/FormsControl.module.css'

const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

let LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required, maxLength30], Input, {type: "text"})}
            {createField("Password", "password", [required, maxLength20], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "RememberMe")}

            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>}

            {/*<Captcha />*/}

            <button>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
