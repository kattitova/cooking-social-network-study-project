import React from "react";
import PropsType from "prop-types";
import styles from "./Friend.module.css";

const Friend = (props) => {
  const { name, avatar } = props;

  return (
    <div className={styles.friend}>
      <div><img className={styles.avatar} src={avatar} alt={name} /></div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};

Friend.propTypes = {
  name: PropsType.string.isRequired,
  avatar: PropsType.string.isRequired,
};

export default Friend;
