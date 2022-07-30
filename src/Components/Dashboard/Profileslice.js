import { createSlice } from "@reduxjs/toolkit";

export const Profileslice = createSlice({
  name: "form",
  initialState: {
    List: [
      {
        FirstName: "Marzieh",
        Surname: "Saadati",
        Nickname: "Mari",
        Country: "Iran",
        Language: "English",
        Birthday: "1995/7/11",
      },
    ],
  },
  reducers: {
    addForm: (state, action) => {
      state.List.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addForm } = listSlice.actions;

export default Profileslice.reducer;
