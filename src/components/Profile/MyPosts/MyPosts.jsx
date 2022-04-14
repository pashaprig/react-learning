import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
  const posts = props.profilePage.posts;
  const newPostElement = React.createRef();

  const postsElements = posts.map(post => <Post key={post.id} id={post.id} message={post.message} likes={post.likes} imgSrc={post.imgSrc} />)

  const addPost = () => { 
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postBlock}>
      <h3 className={s.heading}>My post</h3>
      <div className="">
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addPost} className="">Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts