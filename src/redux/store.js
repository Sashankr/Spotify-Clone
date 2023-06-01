import { configureStore } from "@reduxjs/toolkit";
import currentSongReducer from "../redux/features/songs/currentSongSlice";
import allSongsReducer from "../redux/features/playlists/allSongsSlice";
import likedSongsReducer from "../redux/features/playlists/likedSongsSlice";

export const store = configureStore({
  reducer: {
    currentSong: currentSongReducer,
    allSongs: allSongsReducer,
    likedSongs: likedSongsReducer,
  },
});
