import {LoginModel} from "../models/login-model";
import axios from 'axios';
import {RegisterModel} from "../models/register-model";


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

export async function register(userRegister: RegisterModel) {
    let response = await BBBApi.post('/register', userRegister);
    console.log("Inside Register: ", response);
    return await response;

}