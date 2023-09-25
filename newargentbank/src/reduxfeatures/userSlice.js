import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: null,
    firstName: null,
    lastName: null,
    error: null,
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setUserName: (state, action) => {
      state.userName = action.payload.userName
    },
    clearUser: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
    setToken: (state, action) => {
      state.token = action.payload
      state.isLoggedIn = true;
    }
  },
});

export const { setUser, clearUser, setToken, setUserName } = userSlice.actions;

export default userSlice.reducer;
