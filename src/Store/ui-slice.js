import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
  notification: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openNav(state, action) {
      state.navOpen = action.payload;
    },
    postNotification(state, action) {
      state.notification = action.payload;
    }
  }
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;