import { configureStore } from "@reduxjs/toolkit";
import formreducer from "./Components/Dashboard/Profileslice";
import loginreducer from "./Components/Login/Loginslice";

export default configureStore({
  reducer: {
    form: formreducer,
    login: loginreducer,
  },
});
