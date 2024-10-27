import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:'user',
  initialState:{
    loginData:{},
    signupData:{}
  },
  reducers:{
    setLoginData:(state,action)=>{
      state.loginData=action.payload
    },
    setSignupData:(state,action)=>{
      state.signupData=action.payload
    }
  }
})

export const {loginData,setLoginData,signupData,setSignupData}=userSlice.actions
export default userSlice.reducer