import React from "react";
import { useDispatch } from "react-redux";
import styles from "./SongCard.module.scss";
import Image from "next/image";
import {
  playCurrentSong,
  updateCurrentSong,
} from "@/redux/features/songs/currentSongSlice";

const SongCard = ({ imageSrc, songSource, songName, artistName }) => {
  const dispatch = useDispatch();

  const handleSongChange = () => {
    dispatch(
      updateCurrentSong({
        name: songName,
        artistName: artistName,
        songLink: songSource,
        songThumbnail: imageSrc,
      })
    );
    dispatch(playCurrentSong());
  };

  return (
    <div className={styles["song-card"]} onClick={handleSongChange}>
      <div className={styles["song-card__image-container"]}>
        <Image src={imageSrc} alt={songName} fill />
      </div>
      <h4>{songName}</h4>
      <p>{artistName}</p>
    </div>
  );
};

export default SongCard;
