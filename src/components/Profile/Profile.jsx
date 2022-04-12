import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const addPost = props.addPost;

  return (
    <div>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage} 
               addPost={addPost} 
               updateNewPostText={props.updateNewPostText}
               newPostText={props.profilePage.newPostText}/>
    </div>
  )
}

export default Profile