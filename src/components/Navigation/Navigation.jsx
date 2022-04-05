import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink className={ navData => navData.isActive ? s.active : s.link } to='/'>Profile</NavLink>
        </li>
        <li>
          <NavLink className={ navData => navData.isActive ? s.active : s.link } to='/messages'>Messages</NavLink>
        </li>
        <li>
          <NavLink className={ navData => navData.isActive ? s.active : s.link } to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink className={ navData => navData.isActive ? s.active : s.link } to='/music'>Music</NavLink>
        </li>
        <li>
          <NavLink className={ navData => navData.isActive ? s.active : s.link } to='/settings'>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation