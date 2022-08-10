import { configureStore } from "@reduxjs/toolkit";
import formreducer from "../Redux/Userslice";
import mereducer from "../Redux/Userslice";
// import loginreducer from "../Login/Loginslice";

export default configureStore({
  reducer: {
    form: formreducer,
    auth: mereducer,
  },
});
