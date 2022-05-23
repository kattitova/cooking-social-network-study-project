import React from "react";
import styles from "./UserProfile.module.css";

const UserProfile = () => (
  <div>
    <div className={styles.banner}>
      <img src="https://media.istockphoto.com/photos/assorted-raw-organic-vegetables-and-ingredients-for-healthy-cooking-picture-id495251194" />
      ;
    </div>
    <div className={styles.userprofile}>
      <div className={styles.avatar}>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-cooking-food-in-kitchen-4874541-4055255.png" />
      </div>
      <div>Info</div>
    </div>
  </div>
);

export default UserProfile;
