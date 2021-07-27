import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store"


interface State{
    depositAmount: string,
    bankAccountId: string,
    isLoading: boolean,
}

const initialState: State = {
    isLoading: false,
    depositAmount: "",
    bankAccountId: ""
}
export const depositSlice = createSlice({
    name: "deposit",
    initialState,
    reducers:{
        loading:(state) => {
            state.isLoading = true;
        },
        isLoaded:(state) => {
            state.isLoading = false;
        },
        makeDeposit:(state,action:PayloadAction<any>)=>{
            state.depositAmount = action.payload.depositAmount;
            state.bankAccountId = action.payload.bankAccountId;
        }
    },

});

export const {loading,isLoaded,makeDeposit} = depositSlice.actions;
export const depositState = (state: RootState) => state.auth;
export default depositSlice.reducer;