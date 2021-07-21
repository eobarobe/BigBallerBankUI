import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

//creates our outhState model and defines their field types
interface State {
    isAuthenticated: boolean;
    isLoading: boolean;
    username: string;
    password: string;
    //showLogin: boolean;

}

//loads our state with initial values
const initialState: State = {
    isAuthenticated: false,
    isLoading: false,
    username: "",
    password: "",
    //showLogin: false,
}
//exports the creation of our authSlice
export const authSlice = createSlice({
    name: "auth",
    initialState,
    //reducers take in the action that we want to dispatch
    reducers: {
        //action creators + types
        //each action contains an action type and its values (payload)
        loading: (state) =>{
            state.isLoading = true;
        },
        isLoaded:(state) =>{
            state.isLoading = false;
        },
        loginUser: (state, action: PayloadAction<any>)=>{
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        logoutUser: (state) => {
            state.username = "";
            state.password = "";
            state.isLoading = false;
            state.isAuthenticated = false;
        }
    },
});
//export actions to be used by loginComponent
export const {loading,isLoaded,loginUser,logoutUser} = authSlice.actions;

//export our authState
export const authState = (state: RootState) => state.auth;

export default authSlice.reducer;