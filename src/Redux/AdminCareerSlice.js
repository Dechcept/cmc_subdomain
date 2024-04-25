import { createSlice } from "@reduxjs/toolkit";

const a = JSON.parse(localStorage.getItem("auth"));
const user1 = a ? a.user : null;
const token = a ? a.token : "";
const initialState = {
  Data: [],

  EditID: "",

  IsOpen: false,
  IsEdit: false,
  auth: {
    user: user1,
    token: token,
  },
};
const CareerSlice = createSlice({
  name: "Admincareer",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.IsOpen = !state.IsOpen;
    },

    EditOpen: (state, action) => {
      state.IsEdit = !state.IsEdit;
      state.EditID = action.payload;
    },

    setAuth: (state, action) => {
      const d = action.payload;
      state.auth.user = d.user;
      state.auth.token = d.token;
    },
  },
});

export const { addData, Data, auth, setAuth, EditOpen } = CareerSlice.actions;

export default CareerSlice.reducer;
