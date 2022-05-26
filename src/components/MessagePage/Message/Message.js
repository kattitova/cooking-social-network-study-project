import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.css";

const Message = (props) => {
  const { message, sender, tail } = props;
  const messageSender = sender === "from" ? styles.from : styles.to;
  const messageTail = tail === "noTail" ? styles.noTail : styles.tail;

  return (<div className={`${styles.message} ${messageSender} ${messageTail}`}>{message}</div>);
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  tail: PropTypes.string.isRequired,
};

export default Message;
