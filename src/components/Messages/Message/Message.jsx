import React from "react";
import s from './../Messages.module.css';

const Message = (props) => {
    return <p className={s.message}>{props.message}</p>
}


export default Message