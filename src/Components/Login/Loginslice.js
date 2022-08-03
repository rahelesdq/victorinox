import { createSlice } from "@reduxjs/toolkit";

export const Loginslice = createSlice({
  name: "Login",
  initialState: {
    Login: [],
    currentUser: null,
  },
  reducers: {
    Loginpage: (state, action) => {
      currentUser = action.payload;
      // state.Login.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { Loginpage } = Loginslice.actions;

export default Loginslice.reducer;
