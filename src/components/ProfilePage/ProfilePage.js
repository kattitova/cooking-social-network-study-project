import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from "./ProfilePage.module.css";
import UserProfile from "./UserProfile/UserProfile";
import Post from "./MyPosts/Post/Post";

const postsData = [
  { id: "1", message: "Hi, I'm here!", likesCount: "5" },
  { id: "2", message: "My first post", likesCount: "20" },
  { id: "3", message: "My second post", likesCount: "0" },
];

const postsElements = postsData.map(post => <Post key={`post-${post.id}`} message={post.message} like={post.likesCount} />);

const ProfilePage = () => (
  <div className={styles.content}>
    <UserProfile />
    <MyPosts data={postsElements} />
  </div>
);

export default ProfilePage;
