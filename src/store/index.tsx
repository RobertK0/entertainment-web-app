import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialBookmarks =
  JSON.parse(
    //@ts-ignore
    localStorage.getItem("todo_list")
  ) || [];

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: initialBookmarks,
  reducers: {
    addBookmark() {},
    removeBookmark() {},
  },
});

const store = configureStore({
  reducer: {
    bookmarks: bookmarksSlice.reducer,
  },
});

export const bookmarksActions = bookmarksSlice.actions;

export default store;
