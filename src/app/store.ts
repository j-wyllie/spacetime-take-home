import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menuReducer from '../features/menu/menuSlice';
import viewerSlice from '../features/viewer/viewerSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    viewer: viewerSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
