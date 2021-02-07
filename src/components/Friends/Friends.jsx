import React from "react";
import s from "./Friends.module.css"

const Friends = (props) => {
    let friendsElements = props.dialogsPage.dialogs.map(el => <div className={s.frienditem}> <img src={el.logo} alt="" width="70" /> <div>{el.name} </div></div>);


    return <div>
        {friendsElements}
    </div>
}
export default Friends;