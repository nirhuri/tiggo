import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  user: {email: '', password: '', firstName: '', lastName: '', token: ''},
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupUser: (state, action) => {
      console.log('inside signup slice. action: ', action);
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      console.log('action', action);
      state.user = action.payload;
    },
    logoutUser: state => {
      state.user = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        token: '',
      };
    },
  },
});

export const {signupUser, loginUser, logoutUser} = authSlice.actions;

export const selectUser = (state: any) => state.auth.user;

export default authSlice.reducer;
