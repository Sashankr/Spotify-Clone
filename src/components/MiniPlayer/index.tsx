import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import style from "./MiniPlayer.module.scss";
import Image from "next/image";

const MiniPlayer = () => {
  const playerRef = useRef<HTMLAudioElement | null>(null);
  const songDetails = useSelector((state: any) => state.currentSong);
  const [showVolumeControl, setShowVolumeControl] = useState<boolean>(false);
  const [playerVolume, setPlayerVolume] = useState<number>(50);

  const { name, artistName, songLink, songThumbnail } = songDetails.currentSong;
  const isSongPlaying = songDetails.isSongPlaying;

  useEffect(() => {
    if (playerRef.current !== undefined) {
      if (isSongPlaying) {
        playerRef?.current?.play();
      } else {
        playerRef?.current?.pause();
      }
    }
  }, [isSongPlaying, songLink]);

  useEffect(() => {
    if (playerRef.current !== null) {
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
        <i className="fa-solid fa-heart"></i>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="currentColor" fill-rule="evenodd">
            <path
              d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
              fill-rule="nonzero"
            ></path>
            <path d="M10 8h4v3h-4z"></path>
          </g>
        </svg>
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
              setPlayerVolume(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
