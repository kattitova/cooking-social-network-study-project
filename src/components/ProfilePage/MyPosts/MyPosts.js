import React from "react";
import PropsType from "prop-types";
import styles from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const { data } = props;
  const postsElements = data.map(post => <Post key={`post-${post.id}`} message={post.message} like={post.likesCount} />);

  return (
    <div className={styles.postsBlock}>
      <div className="pageTitle">My Posts</div>
      <NewPost />
      {postsElements}
    </div>
  );
};

MyPosts.propTypes = {
  data: PropsType.arrayOf(PropsType.object).isRequired,
};

export default MyPosts;
