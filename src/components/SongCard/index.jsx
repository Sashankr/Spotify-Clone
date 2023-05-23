import React from "react";
import styles from "./SongCard.module.scss";
import Image from "next/image";

const SongCard = ({ imageSrc, songSource, songName, artistName }) => {
  return (
    <div className={styles["song-card"]}>
      <div className={styles["song-card__image-container"]}>
        <Image src={imageSrc} alt={songName} fill />
      </div>
      <h4>{songName}</h4>
      <p>{artistName}</p>
    </div>
  );
};

export default SongCard;
