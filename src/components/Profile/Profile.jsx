import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const posts = props.posts;
  const addPost = props.addPost;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost}/>
    </div>
  )
}

export default Profile