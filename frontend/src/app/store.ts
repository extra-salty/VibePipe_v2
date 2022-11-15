import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "../features/color/colorSlice";
import { deviceReducer } from "../features/device/deviceSlice";

export const store = configureStore({
  reducer: {
    color: colorReducer,
    device: deviceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
