import { configureStore } from '@reduxjs/toolkit'
import sidenavReducer from './slices/sidenavSlice.js'
export default configureStore({
  reducer: {
    sidenav: sidenavReducer
  }
})