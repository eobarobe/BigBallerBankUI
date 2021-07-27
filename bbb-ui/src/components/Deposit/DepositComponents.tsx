import React, {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Container,Form,Button} from "react-bootstrap";
import {DepositModel} from "../../models/deposit-model";
import {depositState,makeDeposit} from "../../state-slices/deposit/deposit-slice";
import {deposit} from "../../remote/api-client";



const DepositComponent = () => {
    const dispatch = useDispatch();
    const [depositTotal, setDeposit] = useState({depositAmount:"",bankAccountId: ""} as DepositModel )

    let onChange = (e:any)=>{
        const{name,value} = e.target;
        setDeposit({
            ...depositTotal,[name]: value
        });
        console.log(e.target);
    }
    let depositToAccount = async(e:any) => {
        e.preventDefault();
        await deposit(depositTotal).then(response =>{
            setDeposit({depositAmount: "",bankAccountId:""} as DepositModel);
            dispatch(makeDeposit({
                depositAmount: response.data.depositAmount,
                bankAccountId: response.data.bankAccountId
            }));
        }).catch(()=>{
            console.log("deposit failure")
        })
    }

    return(
        <Container>
            <h2>Deposit Component</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Deposit Amount:
                        <Form.Control name={"depositAmount"} value={depositTotal.depositAmount} onChange = {onChange}  className="transaction" type="text" placeholder={"Enter Amount"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Account ID:
                        <Form.Control name={"bankAccountId"} value={depositTotal.bankAccountId} onChange = {onChange} className="transaction" type="text" placeholder={"Bank Account ID"} />
                    </Form.Label>
                </Form.Group>

                <Form.Group>
                    <Button name={"Deposit"} type="submit" value= "Deposit" className={"btn"} onClick = {depositToAccount}>Deposit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default DepositComponent;