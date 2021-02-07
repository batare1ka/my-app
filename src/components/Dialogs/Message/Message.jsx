import React, { Component } from "react";
import s from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Message = (props) => {
    let postMessage = props.showMessages.showMessages.message.map( item => <p> {item.message}</p>);
    let sendMessage = React.createRef();
    let sendClick = () => {
        props.updateNewMessageTextActionCreator();
        
    }
    let changeMessage= () => {
        let  text = sendMessage.current.value;
        props.updateCurrentMessageTextActionCreator(text);
    }

    return <div className={s.message}>{props.message}
        <div>
            <textarea onChange={changeMessage} ref={sendMessage} value={props.showMessages.currentMessageValue}></textarea>
        </div>
        <div>
            <button onClick={sendClick}>Send</button>
        </div>
          {postMessage}
    </div>

}

export default Message;