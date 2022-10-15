import React, { useState, useEffect } from "react";
import "./Manager.css";

const Manager = ({ state }) => {
  const [account, setAccount] = useState("");
  const [cbalance, setCbalance] = useState(0);
  const [lwinner, setLwinner] = useState("no winner yet");
  

  useEffect(() => {
   
    const getAccount = async () => {
      const { web3 } = state;
      const accounts = await web3.eth.getAccounts();
      
      console.log(accounts);
      setAccount(accounts[0]);
    };
    state.web3 && getAccount();
  }, [state, state.web3]);

  const contractBalance = async () => {
    const { contract } = state;
    try {
      const balance = await contract.methods.getbalance().call({ from: account });
      console.log(balance);
      setCbalance(balance);
    }catch(e){
      setCbalance("u r not manager");
    }
  };
  const winner=async()=>{
    try{
      const {contract} = state;
      await contract.methods.PickWinner().send({from:account});
      const LotteryWinner=await contract.methods.winner().call()
      console.log(LotteryWinner);
      setLwinner(LotteryWinner);
    }catch(e){
     setLwinner("u r not manager");
    }
  
  }
 return(
  <ul className="list-group" id="list">
  <div className="center">
    <li className="list-group-item" aria-disabled="true">
      <b>Connected account :</b> {account}
    </li>
    <li className="list-group-item">
      <b> Winner : </b>
      {lwinner}
      <button className="button1" onClick={winner}>
        Click For Winner
      </button>
    </li>
    <li className="list-group-item">
      <b>Balnace : </b> {cbalance} ETH
      <button className="button1" onClick={contractBalance}>
        Click For Balance
      </button>
    </li>
  </div>
</ul>
);
};

export default Manager;

