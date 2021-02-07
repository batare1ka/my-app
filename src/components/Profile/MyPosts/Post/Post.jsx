import React, { Component } from 'react';
import s from "./Post.module.css"
const Post = (props) => {

    return (
       
            <div className={s.item}>
                 {props.message}
               <div>
                   <span> likes {props.likescount}</span>
               </div>
                </div>
           
    )   
}
export default Post;