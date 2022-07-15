import {useEffect, useState} from "react"

const ProfileStatusWithHook = (props) =>{

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( ()=>{
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

   let deactivateEditMode = () => {
        setEditMode(false)

        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || "----"}
                    </span>
                </div>
            }

            {editMode &&
                <div>
                    <input
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                        onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook
