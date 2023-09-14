import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reduxfeatures/userSlice'

const store = configureStore({ reducer: {
    user: userReducer
} })

export default store;   

console.log('Contenu complet du store :', store.getState());