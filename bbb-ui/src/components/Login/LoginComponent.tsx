import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {useHistory} from 'react-router-dom';
import {LoginModel} from "../../models/login-model";
import {authState, loginUser} from '../../state-slices/auth/auth-slice';
import {Row,Col,Form,Button,Container, Dropdown} from 'react-bootstrap';
import {login} from "../../remote/api-client";

const LoginComponent = () =>{

    const dispatch = useDispatch();
    //const history = useHistory();
    const auth = useSelector(authState);
    const [userLogin, setUserLogin] = useState({username:"",password:""} as LoginModel);

    //this onchange function tracks the entry of the form fields
    //and populates our userLogin properties: username and password
    //with the use of event.target
    let onChange = (e:any)=>{

        const {name,value} = e.target;
        setUserLogin({
            ...userLogin,[name]: value
        });
        console.log(e.target);


    }
    let logUserIn = async(e:any) => {
        e.preventDefault();
        await login(userLogin).then(response => {
            setUserLogin({username: "",password: ""} as LoginModel);
            dispatch(loginUser({username: response.data.username,password: response.data.password}));
        }).catch(()=>{

                console.log("unauthorized");

        })

    }

    return(
        <Container>

            <h2>Login Component</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Username:
                    <Form.Control name={"username"} value={userLogin.username} onChange = {onChange}  className="auth" type="text" placeholder={"username"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:
                    <Form.Control name={"password"} value={userLogin.password} onChange = {onChange} className="auth" type="password" placeholder={"********"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Button name={"Login"} type="submit" value= "Login" className={"btn"} onClick = {logUserIn}>Login</Button>
                </Form.Group>

            </Form>

        </Container>
    );
}
export default LoginComponent;
