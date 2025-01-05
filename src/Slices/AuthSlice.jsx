

import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isAuthenticated:false
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        isLoggedIn:(state)=>{
            state.isAuthenticated = true;
        },
        isLogOut:(state)=>{
            state.isAuthenticated = false;
        }
    }
})

export const {isLoggedIn,isLogOut} = AuthSlice.actions;

export const authReducer =  AuthSlice.reducer;