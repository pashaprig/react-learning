import React from "react";
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item} id={props.id}>
      <img className={s.img} src={props.imgSrc} alt="img"/>
      <p>{props.message} likesNumber is {props.likes}</p>
    </div>
  )
}

export default Post