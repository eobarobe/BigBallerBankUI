import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
//import {useHistory} from 'react-router-dom';
import {LoginModel} from "../../models/login-model";
import {authState, loginUser} from '../../state-slices/auth/auth-slice';
import {Row,Col,Form,Button,Container} from 'react-bootstrap';

const LoginComponent = () =>{

    const dispatch = useDispatch();
    //const history = useHistory();
    const auth = useSelector(authState);
    const [userLogin, setUserLogin] = useState({username:"",password:""} as LoginModel);

    //this onchange function tracks the entry of the form fields
    //and populates our userLogin properties: username and password
    //with the use of event.target
    const onchange = (e:any)=>{
        const {name,value} = e.target;
        setUserLogin({
            ...userLogin,[name]: value
        });

    }

    return(
        <Container>

            <h2>Login Component</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Username:
                    <Form.Control name={"username"} value={userLogin.username} onChange = {onchange}  className="auth" type="text" placeholder={"username"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:
                    <Form.Control name={"password"} value={userLogin.username} onChange = {onchange} className="auth" type="password" placeholder={"********"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Button name={"Login"} type="submit" value= "Login" className={"btn"} >Login</Button>
                </Form.Group>

            </Form>

        </Container>
    );
}
export default LoginComponent;
