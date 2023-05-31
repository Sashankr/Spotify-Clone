import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import style from "./MiniPlayer.module.scss";
import Image from "next/image";

const MiniPlayer = () => {
  const playerRef = useRef();
  const songDetails = useSelector((state) => state.currentSong);
  const [showVolumeControl, setShowVolumeControl] = useState();
  const [playerVolume, setPlayerVolume] = useState(50);

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

  useEffect(() => {
    if (playerRef.current !== undefined) {
      playerRef.current.volume = playerVolume / 100;
    }
  }, [playerVolume]);

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
        <div
          onMouseEnter={() => {
            setShowVolumeControl(true);
          }}
          onMouseLeave={() => {
            setShowVolumeControl(false);
          }}
          className={style["mini-player__volume-control-container"]}
        >
          <i
            className={`fa-solid ${
              playerVolume < 30 && playerVolume > 0
                ? "fa-volume-low"
                : playerVolume > 30
                ? "fa-volume-high"
                : "fa-volume-off"
            }`}
          ></i>
          <input
            className={`${
              showVolumeControl
                ? style["mini-player__volume-control active"]
                : style["mini-player__volume-control"]
            } `}
            type="range"
            min={0}
            max={100}
            value={playerVolume}
            onChange={(e) => {
              setPlayerVolume(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
