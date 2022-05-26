import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../MessagePage.module.css";

const Dialog = (props) => {
  const { name, id, avatar } = props;
  const path = `/messages/${id}`;

  return (
    <div className={styles.dialog}>
      <NavLink to={path} className={styles.dialogLink} activeClassName={styles.activeDialog}>
        <img src={avatar} alt={name} />
        {name}
      </NavLink>
    </div>
  );
};

Dialog.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Dialog;
