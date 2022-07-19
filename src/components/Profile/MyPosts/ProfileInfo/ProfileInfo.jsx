import React from "react";
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHook from "../ProfilrStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={style.discriptionBlock}>
            <img src={profile.photos.large} alt=''/>
            <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
        </div>
    );
}

export default ProfileInfo;
