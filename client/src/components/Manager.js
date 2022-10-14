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
   
      const balance = await contract.methods.getbalance().call({ from: account });
      console.log(balance);
      setCbalance(balance);
    
  };
  const winner=async()=>{
    
      const {contract} = state;
      await contract.methods.PickWinner().send({from:account});
      const LotteryWinner=await contract.methods.winner().call()
      console.log(LotteryWinner);
      setLwinner(LotteryWinner);
    
  
  }
 return(
  <>
  connected account : {account};
  <br></br>
  winner:{lwinner};
  <button onClick={winner}>click for winner</button>
  <br></br>
  contract balance :{cbalance};
  <button onClick={contractBalance}>Balance</button>
  </>
 )
};
export default Manager;

//