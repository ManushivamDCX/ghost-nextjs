import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import blogReducer from './blogs';
import { createWrapper } from "next-redux-wrapper";
import { ThunkDispatch } from "redux-thunk";

const makeStore = () =>
  configureStore({
    reducer: {
      blog: blogReducer
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type AppThunkDispatch = ThunkDispatch<AppState, any, AnyAction>;

export const wrapper = createWrapper<AppStore>(makeStore);