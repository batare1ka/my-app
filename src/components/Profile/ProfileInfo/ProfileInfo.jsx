import React, { Component } from 'react';
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
    return <div>
        <div>

            <img src="https://img4.goodfon.ru/wallpaper/nbig/2/ae/gold-luxury-texture-background-golden.jpg" />
        </div>
        <div className={s.descriptionBlock}>
            ava + description
            </div>
    </div>
}
export default ProfileInfo;