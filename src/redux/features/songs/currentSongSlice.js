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
  isLiked: false,
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
    toggleLike: (state, action) => {
      return {
        ...state,
        isLiked: !state.isLiked,
      };
    },
  },
});

export const {
  updateCurrentSong,
  playCurrentSong,
  pauseCurrentSong,
  toggleLike,
} = currentSongSlice.actions;

export default currentSongSlice.reducer;
