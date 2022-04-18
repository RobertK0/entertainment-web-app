import {
  configureStore,
  createSlice,
  current,
} from "@reduxjs/toolkit";

const persistState = function (state: string[]) {
  localStorage.setItem("bookmarks", JSON.stringify(state));
};

const initialBookmarks = JSON.parse(
  //@ts-ignore
  localStorage.getItem("bookmarks")
) || ["en1", "en5"];

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
    addBookmark(state, payload) {
      state.push(payload.payload);
      persistState(current(state));
    },
    removeBookmark(state, payload) {
      const index = state.indexOf(payload.payload);
      state.splice(index, 1);
      persistState(current(state));
    },
  },
});

const store = configureStore({
  reducer: {
    bookmarks: bookmarksSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export type State = {
  bookmarks: string[];
  filters: { search: string };
};

export const bookmarksActions = bookmarksSlice.actions;
export const filterActions = filtersSlice.actions;

export default store;
