import React, {useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import { registerState} from "../../state-slices/register/register-slice";
import {registerUser} from "../../state-slices/register/register-slice";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../remote/api-client";
import {RegisterModel} from "../../models/register-model";

const RegisterComponent = () =>{
    const dispatch = useDispatch();
    const registerSelector = useSelector(registerState)
    const [userRegister, setRegisteredUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        age : 0,
        username : "",
        password : ""
    } as RegisterModel);

    let onChange = (e:any) => {
        const {name,value} = e.target;
        setRegisteredUser({
            ...userRegister,[name]:value
        });
        console.log(e.target);
    }

    let registerNewUser = async (e:any) => {
        e.preventDefault();

        await register(userRegister).then(response => {
            setRegisteredUser({
                firstName : "",
                lastName : "",
                email : "",
                age : 0,
                username : "",
                password : ""
            } as RegisterModel);
            dispatch(registerUser
            ({
                username: response.data.username,
                password: response.data.password,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                age: response.data.age,
                email: response.data.email
            }));
        }).catch(() => {
            console.log("Invalid registration details.")
        })
    }

    return (
        <Container>
            <h2>Register Component</h2>
            <Form>
                <Form.Group>
                    <Form.Label>First Name:
                        <Form.Control name={"firstName"} value={userRegister.firstName} onChange = {onChange}  className="register" type="text" placeholder={"First Name"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name:
                        <Form.Control name={"lastName"} value={userRegister.lastName} onChange = {onChange}  className="register" type="text" placeholder={"Last Name"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Age:
                        <Form.Control name={"age"} value={userRegister.age} onChange = {onChange}  className="register" type="text" placeholder={"age"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email:
                        <Form.Control name={"email"} value={userRegister.email} onChange = {onChange}  className="email" type="text" placeholder={"email"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Username:
                        <Form.Control name={"username"} value={userRegister.username} onChange = {onChange}  className="register" type="text" placeholder={"username"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:
                        <Form.Control name={"password"} value={userRegister.password} onChange = {onChange} className="register" type="password" placeholder={"********"} />
                    </Form.Label>
                </Form.Group>


                <Form.Group>
                    <Button name={"Register"} type="submit" value= "Register" className={"btn"} onClick={registerNewUser}>Register</Button>
                </Form.Group>

            </Form>
        </Container>);
}
export default RegisterComponent;