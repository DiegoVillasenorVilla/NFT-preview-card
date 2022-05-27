import React from "react";
import "./App.css";
import equilibrium from "./images/image-equilibrium.jpg";
import ethereum from "./images/icon-ethereum.svg";
import avatar from  "./images/image-avatar.png";
import clock from "./images/icon-clock.svg";
import view from "./images/icon-view.svg";

function App() {
  return (
    <div className="App">
      <div className="main-container">

        <div className="top-container">
          <img src={equilibrium} className="main-image" alt="NFT" />
           <div className="view-container">
             <img src={view} className="view-icon" alt="view"/>
           </div>
        </div>

        <div className="middle-container">
          <h1>Equilibrium #3429</h1>
          <p>
            Our Equilibrium collection promotes 
            <br/>balance and calm.
          </p>
        </div>

        <div className="bottom-container">
          
          <span className="ethereum-text">
            <img src={ethereum} alt="Ethereum" className="ethereum-icon" />
            0.041 ETH
          </span>
          <span>
             <img src={clock} alt="clock" className="clock-icon"/>
             3 days left
          </span>
        </div>
        <hr className="horizontal-line" />

        <div className="footer-container">

          <div className="border-image">
            <img src={avatar} className="avatar-image" alt="Jules Wyvern"/>
          </div>
          
          <span className="span-bottom"> Creation of</span>
          <span className="name-span">Jules Wyvern</span>
        </div>

      </div>
    </div>
  );
}

export default App;
