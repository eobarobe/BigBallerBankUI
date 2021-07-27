import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Container, Form} from "react-bootstrap";
import {WithdrawalModel} from "../../models/withdrawal-model";

const WithdrawalComponent = () => {
    // const dispatch = useDispatch();
    // const [withdrawalInput, setWithdraw] = useState({} as WithdrawalModel)
    //
    // let onChangeInput = (e:any) => {
    //     const {name, value} = e.target;
    //     setWithdraw({
    //         ...withdrawalInput,[name]: value
    //     });
    //     console.log(e.target);
    // }
    //
    // let withdrawFromAccount = async (e:any) => {
    //     e.preventDefault();
    //     await withdraw(withdrawalInput).then(
    //         withdraw
    //     ).catch(() => {
    //         console.log("Failed to make withdrawal")
    //     })
    // }

    return (
        <Container>
            {/*<h2>Withdrawal Component</h2>*/}
            {/*<Form>*/}
            {/*    <Form.Group>*/}
            {/*        <Form.Label> Withdraw From:*/}
            {/*            <Form.Control name={"withdrawal-bank-account"} value={} onChange = {onChangeInput}  className="transaction" type="text" placeholder={"Enter Amount to Withdraw: "} />*/}
            {/*        </Form.Label>*/}
            {/*    </Form.Group>*/}

            {/*    <Form.Group>*/}
            {/*        <Form.Label> Withdraw Amount:*/}
            {/*            <Form.Control name={"withdrawal-amount"} value={} onChange = {onChangeInput}  className="transaction" type="text" placeholder={"Enter Amount to Withdraw: "} />*/}
            {/*        </Form.Label>*/}
            {/*    </Form.Group>*/}
            {/*</Form>*/}
        </Container>
    )
}
export default WithdrawalComponent