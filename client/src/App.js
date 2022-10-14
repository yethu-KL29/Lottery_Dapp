import React, { useState, useEffect } from "react";
import getWeb3 from "./getWeb3";
import Lottery from "./contracts/Lottery.json";
import "./App.css";
import Manager from "./components/Manager";

const App = () => {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
         const networkId = await web3.eth.net.getId();
        
        const deployedNetwork ="0x0f42CA02b1D7E04fD1037c60CA461630788e4542";
        console.log("Contract Address:", deployedNetwork);
       
          const instance = new web3.eth.Contract(
          Lottery.abi,
          deployedNetwork && deployedNetwork.address
          
        );
        setState({ web3, contract: instance });
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <div className="App">
      <div>Hello World</div>
      <Manager state={state}></Manager>
    </div>
  );
};
export default App;