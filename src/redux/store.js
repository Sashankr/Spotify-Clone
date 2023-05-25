import { configureStore } from "@reduxjs/toolkit";
import currentSongReducer from "../redux/features/songs/currentSongSlice";

export const store = configureStore({
  reducer: {
    currentSong: currentSongReducer,
  },
});
