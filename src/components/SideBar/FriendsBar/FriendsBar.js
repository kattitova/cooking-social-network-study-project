import React from "react";
import PropsType from "prop-types";
import styles from "./FriendsBar.module.css";
import Friend from "./Friend/Friend";

const FriendsBar = (props) => {
  const { state } = props;
  const friendsElements = state.map(f => <Friend key={`friend-key-${f.id}`} name={f.userName} avatar={f.avatar} />);

  return (
    <div>
      <div className="pageTitle">Friends</div>
      <div className={styles.friendsBar}>{friendsElements}</div>
    </div>
  );
};

FriendsBar.propTypes = {
  state: PropsType.arrayOf(PropsType.object).isRequired,
};

export default FriendsBar;
