import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const likedSongsSlice = createSlice({
  name: "likedSongs",
  initialState,
  reducers: {
    addToLikedSongs: (state, action) => {
      return [...state, action.payload];
    },
    removeFromLikedSongs: (state, action) => {
      const { songId } = action.payload;
      return state.filter((item) => item.currentSong.id !== songId);
    },
  },
});

export const { addToLikedSongs, removeFromLikedSongs } =
  likedSongsSlice.actions;
export default likedSongsSlice.reducer;
