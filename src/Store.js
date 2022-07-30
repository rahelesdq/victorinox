import { configureStore } from "@reduxjs/toolkit";
import formreducer from "./Profileslice";

export default configureStore({
  reducer: {
    form: formreducer,
  },
});
