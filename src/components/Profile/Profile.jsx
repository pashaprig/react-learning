import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const posts = props.posts;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
}

export default Profile