import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { BrowserRouter, Route } from "react-router-dom";


const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsdata.dialogs.map(el => <DialogItem name={el.name} id={el.id} logo={el.logo} />);

    let messagesElements = props.dialogsdata.messages.map(el => <Message 
        message={el.message}
     updateCurrentMessageTextActionCreator={props.updateCurrentMessageTextActionCreator}
     updateNewMessageTextActionCreator={props.updateNewMessageTextActionCreator}

        showMessages={props.dialogsdata}
            id={el.id}/>);


    return (<BrowserRouter>
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
            <Route path="/dialogs/1"  render={ () => messagesElements[0]}/>
            <Route path="/dialogs/2"  render={ () => messagesElements[1]}/>
            <Route path="/dialogs/3"  render={ () => messagesElements[2]}/>
            <Route path="/dialogs/4"  render={ () => messagesElements[3]}/>
            <Route path="/dialogs/5"  render={ () => messagesElements[4]}/>
            </div>
        </div>
        </BrowserRouter>)
}
export default Dialogs;