import React from "react";
import PropsType from "prop-types";

import MyPosts from "./MyPosts/MyPosts";
import styles from "./ProfilePage.module.css";
import UserProfile from "./UserProfile/UserProfile";

const ProfilePage = (props) => {
  const { state } = props;

  return (
    <div className={styles.content}>
      <UserProfile />
      <MyPosts data={state.postsData} />
    </div>
  );
};

ProfilePage.propTypes = {
  state: PropsType.objectOf(PropsType.object).isRequired,
};

export default ProfilePage;
