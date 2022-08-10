import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      firstname: "Marzieh",
      Surname: "Saadati",
      email: "saadati.marzieh92@gmail.com",
      country: "Iran",
      language: "English",
      password: "1111",
      Confirmpass: "1111",
      startDate: "1995/7/11",
    },
  ],
  me: null,
  login: [],
};

export const Profileslice = createSlice({
  name: "users",
  initialState,

  reducers: {
    Register: (state, action) => {
      state.users.push(action.payload);
      state.me = action.payload;
    },

    Login: (state, action) => {
      const user = (user) => user.email === action.payload.Email;
      const index = state.users.findIndex(user);

      if (index === -1) return alert("user doesnt exist ");

      if (state.users[index].password === action.payload.Pass) {
        state.me = state.users[index];
        action.payload.cb("/dashboard");
      }

      console.log(state.users.findIndex(user));
      console.log("#############################");
      // state.login.push(action.payload.Email);
      // state.login.push(action.payload.Pass);
    },

    // setMe: (state, action) => {
    //   state.me.push(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { Register, Login } = Profileslice.actions;

export default Profileslice.reducer;
