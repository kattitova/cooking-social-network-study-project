import React from "react";
import PropsType from "prop-types";
import styles from "./SideBar.module.css";
import Nav from "./Nav/Nav";
import FriendsBar from "./FriendsBar/FriendsBar";

const SideBar = (props) => {
  const { state } = props;

  return (
    <div className={styles.sideBar}>
      <Nav />
      <FriendsBar state={state} />
    </div>
  );
};

SideBar.propTypes = {
  state: PropsType.arrayOf(PropsType.object).isRequired,
};

export default SideBar;
