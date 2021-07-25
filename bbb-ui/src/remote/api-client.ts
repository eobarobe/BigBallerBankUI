import {LoginModel} from "../models/login-model";
import axios from 'axios';

export const baseURL: string = "http://localhost:5000";

export const BBBApi = axios.create({
    baseURL: baseURL,
    headers:{
        'Content-Type':'application/json'
    }

})
export async function login(userLogin: LoginModel) {
    let response = await BBBApi.post('/auth', userLogin);
    console.log("Inside login: ", response);
    return await response;

}