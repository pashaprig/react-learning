import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <img height="200" src="https://images.macrumors.com/t/mVsxVkokGvYOZLv_lWKhis5yQl8=/2500x/article-new/2021/07/General-Apps-Messages.jpg" alt="" />
      <div className="">
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo