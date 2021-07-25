import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../state-slices/auth/auth-slice'
import registerReducer from '../state-slices/register/register-slice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;