import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialBookmarks =
  JSON.parse(
    //@ts-ignore
    localStorage.getItem("bookmarks")
  ) || [];

const filtersSlice = createSlice({
  name: "filters",
  initialState: { search: "" },
  reducers: {
    applySearch(state, action) {
      state.search = action.payload.toLowerCase();
    },
  },
});

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
    filters: filtersSlice.reducer,
  },
});

export const bookmarksActions = bookmarksSlice.actions;
export const filterActions = filtersSlice.actions;

export default store;
