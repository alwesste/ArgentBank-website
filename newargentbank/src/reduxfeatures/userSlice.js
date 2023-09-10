// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authorisationAPI } from './authAPI';

const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: null, 
      isLoading: false, 
      error: null, 
      isLoggedIn: false, 
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      },
      clearUser: (state) => {
        state.user = null;
        state.isLoggedIn = false;
      },
    },
    
    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isLoggedIn = true;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.isLoggedIn = false;
          });
      },    
  });
  
  export const { setUser, clearUser } = userSlice.actions;
  
  export default userSlice.reducer;
  
  export const loginUser = createAsyncThunk('user/login', async (credentials) => {
    try {
      // Effectuez ici votre logique de connexion, par exemple une requête API.
      const response = await authorisationAPI(credentials);
      console.log('response de cresaeasyncthunk', response)
  
      // Si la connexion réussit, retournez les données de l'utilisateur.
      return response;
    } catch (error) {
      // En cas d'erreur, lancez une exception pour que Redux Toolkit gère les erreurs.
      console.log('looks like a damn mistake')
      throw error;
    }
  });

  