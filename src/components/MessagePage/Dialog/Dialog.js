import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../MessagePage.module.css";

const Dialog = (props) => {
  const { name, id } = props;
  const path = `/messages/${id}`;

  return (
    <div className={styles.dialog}>
      <NavLink to={path} activeClassName={styles.activeDialog}>{name}</NavLink>
    </div>
  );
};

Dialog.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Dialog;
