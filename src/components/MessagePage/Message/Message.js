import React from "react";
import PropTypes from "prop-types";
import styles from "../MessagePage.module.css";

const Message = (props) => {
  const { message } = props;

  return (<div className={styles.message}>{message}</div>);
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
