import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Component/Card'


function App() {
  const handleBuyButtonClick = () => {
    alert("You bought this NFT!");
  };

  return (

    <div className="App">
      <header className="App-header">
        
        <Card
          
          title="NFT Title"
          description="NFT Description"
          image="./Users/natissa-didy/Documents/GitHub/NFT-React/nft-exercise/src/assets/image-equilibrium.jpg"
          price="0.1 ETH"
          onClick={handleBuyButtonClick}
        />
       
      </header>
    </div>
  );

}

export default App;

