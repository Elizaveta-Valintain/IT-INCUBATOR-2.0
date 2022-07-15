import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Mesage";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControl/FormsControl";

const Dialogs = React.memo((props) => {
        let state = props.dialogsPage;
        let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
        let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

        let onSubmit = (value) => {
            props.sendMessage(value.newMessageText);
        }

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div></div>

                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        )
    }
)

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = React.memo((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"newMessageText"}
                    component={Textarea}
                    placeholder={"Enter your message"}
                    validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>
                    Add Message
                </button>
            </div>
        </form>
    )
})


const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
