import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Messages.module.css';

const DialogsItem = (props) => {
    return (
        <li className={s.dialogs__item}>
            <NavLink className={navData => navData.isActive ? s.active : s.link} to={'messages/' + props.id}>{props.name}</NavLink>
        </li>
    )
}

export default DialogsItem