import { configureStore } from '@reduxjs/toolkit'
import sidenavReducer from './slices/sidenavSlice.js'
import overlayReducer from './slices/overlaySlice.js'
export default configureStore({
  reducer: {
    sidenav: sidenavReducer,
    overlay: overlayReducer
  }
})