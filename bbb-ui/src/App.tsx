import React from 'react';
import LoginComponent from "./components/Login/LoginComponent";
import RegisterComponent from "./components/Register/RegisterComponent";
import DepositComponent from "./components/Deposit/DepositComponents"

function App() {
  return (
    <div className="App">
        <DepositComponent />
        <LoginComponent />
        <RegisterComponent />
    </div>
  );
}

export default App;
