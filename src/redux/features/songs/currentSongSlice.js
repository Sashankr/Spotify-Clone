import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: {
    name: "",
    artistName: "",
    songLink: "",
    songThumbnail: "",
    id: "",
  },
  isSongPlaying: false,
};

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    updateCurrentSong: (state, action) => {
      return {
        ...state,
        currentSong: action.payload,
      };
    },
    playCurrentSong: (state, action) => {
      return {
        ...state,
        isSongPlaying: true,
      };
    },
    pauseCurrentSong: (state, action) => {
      return {
        ...state,
        isSongPlaying: false,
      };
    },
  },
});

export const { updateCurrentSong, playCurrentSong, pauseCurrentSong } =
  currentSongSlice.actions;

export default currentSongSlice.reducer;
