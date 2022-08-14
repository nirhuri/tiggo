import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  user:{email:'', password:'', firstName:'', lastName:''},
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('action',action)
      state.user = action.payload;
    },
    logoutUser: state => {
      state.user = null;
    },
  },
});

export const {loginUser, logoutUser} = authSlice.actions;

export const selectUser = (state: any) => state.auth.user;

export default authSlice.reducer;
