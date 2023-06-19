import {createSlice} from '@reduxjs/toolkit'

export const sidenavSlice = createSlice({
    name: 'sidenav',
    initialState: {
        value: "sidenav sidenav-hidden"
    },
    reducers: {
        openNav: state =>{
            state.value = "sidenav"
        },
        closeNav: state =>{
            state.value = "sidenav sidenav-hidden"
        }
    }
})

export const { openNav, closeNav} = sidenavSlice.actions

export default sidenavSlice.reducer