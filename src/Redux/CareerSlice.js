import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Data: [],
};

const CareerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.Data = action.payload;
      console.log(action.payload);
    },
    SetID: (state, action) => {
      localStorage.setItem("cmc-ID", JSON.stringify(action.payload));
    },
  },
});

export const { Data, getData, SetID } = CareerSlice.actions;

export default CareerSlice.reducer;
