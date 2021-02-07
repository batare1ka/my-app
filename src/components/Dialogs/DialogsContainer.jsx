import React from "react";
import Dialogs from "./Dialogs";
import {updateCurrentMessageTextActionCreator,updateNewMessageTextActionCreator  } from "./../../redux/messages-reducer";






const DialogsContainer = (props) => {
    let sentMessage = ()=> {
    props.store.dispatch(updateNewMessageTextActionCreator());
    }
    let typeMessage = (text) =>{
    props.store.dispatch(updateCurrentMessageTextActionCreator(text));
    }
    
    
    
    return <Dialogs dialogsdata={props.store.getState().messagesPage}
     updateCurrentMessageTextActionCreator={typeMessage}
     updateNewMessageTextActionCreator={sentMessage}
     />
}
export default DialogsContainer;