import {createSlice} from '@reduxjs/toolkit'

export const overlaySlice = createSlice({
    name: 'overlay',
    initialState: {
        value: "overlay"
    },
    reducers: {
        showOverlay: state =>{
            state.value = "overlay overlay-shown"
        },
        hideOverlay: state =>{
            state.value = "overlay"
        }
    }
})

export const { showOverlay, hideOverlay} = overlaySlice.actions

export default overlaySlice.reducer