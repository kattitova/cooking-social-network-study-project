import React from "react";
import PropsType from "prop-types";
import styles from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  const { data } = props;

  return (
    <div className={styles.postsBlock}>
      <div className="pageTitle">My Posts</div>
      <NewPost />
      {data}
    </div>
  );
};

MyPosts.propTypes = {
  data: PropsType.arrayOf(PropsType.object).isRequired,
};

export default MyPosts;
