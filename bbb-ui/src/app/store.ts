import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../state-slices/auth/auth-slice'
import registerReducer from '../state-slices/register/register-slice'
import depositReducer from "../state-slices/deposit/deposit-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    deposit: depositReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;