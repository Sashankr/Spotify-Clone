import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Storm Clouds",
    source: "/static/songs/storm-clouds-purpple-cat.mp3",
    imageSource: "/static/song-1.jpg",
    artist: "Purple Cat",
  },
  {
    id: 2,

    name: "Still Awake",
    source: "/static/songs/Still-Awake-Lofi-Study-Music.mp3",
    imageSource: "/static/song-2.jpg",
    artist: "Ghostrifter Official",
  },
  {
    id: 3,

    name: "Morning Routine",
    source: "/static/songs/Morning-Routine-Lofi-Study-Music.mp3",
    imageSource: "/static/song-3.jpg",
    artist: "Ghostrifter Official",
  },
  {
    id: 4,

    name: "Heart Of The Ocean",
    source: "/static/songs/Heart-Of-The-Ocean.mp3",
    imageSource: "/static/song-4.jpg",
    artist: "Purple Cat",
  },
  {
    id: 5,
    name: "City Lights",
    source: "/static/songs/Ghostrifter-Official-City-Lights.mp3",
    imageSource: "/static/song-5.jpg",
    artist: "Ghostrifter Official",
  },
];

const allSongsSlice = createSlice({
  name: "allSongs",
  initialState,
  reducers: {
    updateAllSongs: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { updateAllSongs } = allSongsSlice.actions;
export default allSongsSlice.reducer;
