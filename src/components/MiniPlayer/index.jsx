import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import style from "./MiniPlayer.module.scss";
import Image from "next/image";

const MiniPlayer = () => {
  const playerRef = useRef();
  const songDetails = useSelector((state) => state.currentSong);

  const { name, artistName, songLink, songThumbnail } = songDetails.currentSong;
  const isSongPlaying = songDetails.isSongPlaying;

  useEffect(() => {
    if (playerRef.current !== undefined) {
      if (isSongPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [isSongPlaying, songLink]);

  if (name === "") {
    return (
      <div className={style["mini-player"]}>
        <p className={style["mini-player__no-song"]}>
          Please select a song to play
        </p>
      </div>
    );
  }

  return (
    <div className={style["mini-player"]}>
      <div className={style["mini-player__info"]}>
        <div className={style["mini-player__image-container"]}>
          <Image src={songThumbnail} alt={name} fill />
        </div>
        <div className={style["mini-player__song-details"]}>
          <h5>{name}</h5>
          <p>{artistName}</p>
        </div>
      </div>
      <div>
        <audio ref={playerRef} controls src={songLink}>
          <a href={songLink}>Download audio</a>
        </audio>
      </div>
      <div className={style["mini-player__additional-controls"]}>
        <i className="fa-solid fa-list"></i>
        <i class="fa-solid fa-volume-low"></i>
      </div>
    </div>
  );
};

export default MiniPlayer;
