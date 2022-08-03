import { createSlice } from "@reduxjs/toolkit";

export const Profileslice = createSlice({
  name: "form",
  initialState: {
    List: [
      {
        FirstName: "",
        Surname: "",
        Nickname: "",
        Country: "",
        Language: "",
        Birthday: "]",
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
export const { addForm } = Profileslice.actions;

export default Profileslice.reducer;
