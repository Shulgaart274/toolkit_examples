import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: { toolkitSlice },
  middleware,
  devTools: true,
});

export default store;





// import { toolkitReducer } from "./reducer/toolkitReducer";









