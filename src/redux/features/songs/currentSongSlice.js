import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: {
    name: "",
    artistName: "",
    songLink: "",
    songThumbnail: "",
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
    updatePlayState: (state, action) => {
      return {
        ...state,
        isSongPlaying: !state.isSongPlaying,
      };
    },
  },
});

export const { updateCurrentSong, updatePlayState } = currentSongSlice.actions;

export default currentSongSlice.reducer;
