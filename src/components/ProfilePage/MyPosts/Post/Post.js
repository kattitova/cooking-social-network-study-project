import React from "react";
import PropTypes from "prop-types";
import styles from "./Post.module.css";

const Post = (props) => {
  const { message, like } = props;
  return (<div><div>{message}</div>
    <div>Like-{like}</div></div>);
};

Post.propTypes = {
  message: PropTypes.string.isRequired,
  like: PropTypes.string.isRequired,
};

export default Post;
