import React from "react";
import s from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={"/dialogs/" + props.id}><div className={s.dialogitem}> <img src={props.logo} alt="" width="70" /> <div className={s.friendname}> {props.name}</div></div></NavLink>
    </div>
}

export default DialogItem;