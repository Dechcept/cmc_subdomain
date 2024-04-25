import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Data: [],
  EditID: "",
  IsOpen: false,
  IsEdit: false,
};

const AdminBlogSlice = createSlice({
  name: "AdminBlog",
  initialState,
  reducers: {
    addBlogData: (state, action) => {
      state.IsOpen = !state.IsOpen;
    },

    blogEditOpen: (state, action) => {
      state.IsEdit = !state.IsEdit;
      state.EditID = action.payload;
    },
  },
});

export const { addBlogData, blogEditOpen } = AdminBlogSlice.actions;

export default AdminBlogSlice.reducer;
