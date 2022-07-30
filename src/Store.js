import { configureStore } from "@reduxjs/toolkit";
import formreducer from "./Components/Dashboard/Profileslice";

export default configureStore({
  reducer: {
    form: formreducer,
  },
});
