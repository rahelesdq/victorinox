import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../Redux/Userslice";
// import loginreducer from "../Login/Loginslice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
