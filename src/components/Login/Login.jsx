import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './../common/FormsControl/FormsControl.module.css'

const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    placeholder={"Email"}
                    component={Input}
                    validate={[required, maxLength30]}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder={"Password"}
                    component={Input}
                    validate={[required, maxLength20]}
                    type={"text"}/>
            </div>
            <div>
                <Field name={"rememberMe"} type={'checkbox'} component={Input}/>RememberMe
            </div>

            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
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
        // console.log(formData)
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
