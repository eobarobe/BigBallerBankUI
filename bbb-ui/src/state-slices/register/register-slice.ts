import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

interface State {
    username: string;
    password: string;
    age: number;
    email: string;
    firstName: string;
    lastName: string;
    isLoading: boolean;
}

const initialState : State = {
    username: "",
    password: "",
    age: 0,
    email: "",
    firstName: "",
    lastName: "",
    isLoading: false
}

export const registerSlice = createSlice({
    name: "register-slice",
    initialState,
    reducers:{
        loading: (state) => {
            state.isLoading = true;
        },
        isLoaded: (state) => {
            state.isLoading = false;
        },
        registerUser: (state, action: PayloadAction<any>)=>{
            state.username = action.payload.username;
            state.password = action.payload.passowrd;
            state.age = action.payload.age;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    },
});

export const {loading, registerUser} = registerSlice.actions;
export const registerState = (state: RootState)=> state.register;
export default registerSlice.reducer;