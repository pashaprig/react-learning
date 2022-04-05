import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  const posts = props.posts;

  let postsElements = posts.map(post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes} imgSrc={post.imgSrc} />)

  return (
    <div className={s.posts}>
      {postsElements}
    </div>
  ) 
}

export default MyPosts