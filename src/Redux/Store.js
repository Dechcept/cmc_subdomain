import { configureStore } from "@reduxjs/toolkit";
import CareerSlice from "./CareerSlice";
import AdminCareerSlice from "./AdminCareerSlice";
import AdminBlogSlice from "./AdminBlogSlice";

const Store = configureStore({
  reducer: {
    Admincareer: AdminCareerSlice,
    AdminBlog: AdminBlogSlice,
    career: CareerSlice,
  },
 
});

export default Store;
