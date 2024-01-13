import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({ reducer: todosReducer });

// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import todosReducer from '../features/todos/todosSlice';

// export const store = configureStore({
//   reducer: {
//     todos: todosReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
