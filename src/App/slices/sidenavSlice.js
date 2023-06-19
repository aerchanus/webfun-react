import {createSlice} from '@reduxjs/toolkit'

export const sidenavSlice = createSlice({
    name: 'sidenav',
    initialState: {
        value: 0
    },
    reducers: {
        openNav: state =>{
            state.value = 1
        },
        closeNav: state =>{
            state.value = 0
        }
    }
})

export const { openNav, closeNav} = sidenavSlice.actions

export default sidenavSlice.reducer