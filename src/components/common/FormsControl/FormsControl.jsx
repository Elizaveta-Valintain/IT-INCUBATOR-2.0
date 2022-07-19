import style from './FormsControl.module.css'
import {Field} from "redux-form";

const FormControl = ({meta: {error, touched}, children}) => {
    const hasError = error && touched
    return (
        <div className={style.formControl + " " + (hasError ? style.error : " ")}>
            <div>
                {children}
            </div>
            <div>
                {touched &&
                    (error && <span>{error}</span>)}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, type = {}, text = "") => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...type}/>{text}
        </div>
    )
}
