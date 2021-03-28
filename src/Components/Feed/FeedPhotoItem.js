import React from "react";
import styles from "./FeedPhotoItem.module.css";

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={`${styles.photo} animeLeft`} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.preview}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
