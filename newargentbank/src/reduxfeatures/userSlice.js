import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authorisationAPI } from './authAPI';
import store from '../store';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
    lastName: null,
    isLoading: false,
    error: null,
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setToken: (state, action) => {
      state.token = action.payload
      state.isLoggedIn = true;
    }
  },
});

export const { setUser, clearUser, setToken } = userSlice.actions;

export default userSlice.reducer;

export const loginUser = createAsyncThunk('user/login', async (credentials, { dispatch }) => {
  try {
    const response = await authorisationAPI(credentials);
    console.log('response de createAsyncThunk', response);

    if (response.status === 200) {
      dispatch(setToken(response.body.token))
      console.log('new store:', store.getState());

    } else {
      console.error('Login failed');
    }
    return response;
  } catch (error) {
    console.log('looks like a damn mistake');
    throw error;
  }
});
