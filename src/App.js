import logo from './logo.svg';
import tricolor from './tricolor.svg'
import metafrica from './metafrica_logo.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import discord from './discord.png'
import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={metafrica} /> */}
        {/* <img src='./metafrica_logo.png' /> */}
        <img src={metafrica} className="App-logo" width="25%" />
        <p>
          <code style={{color: "black"}}>Coming Soon...</code>
        </p>
        <div style={{display: "inline-flex"}}>
        {/* <a
          className="App-link"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <a href="https://twitter.com/MetafricaNFT" target="_blank">
          <img src={twitter} width="50px" height="50px" style={{margin: "8px"}}/>
        </a>
        {/* </a> */}
        {/* <a
          className="App-link"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <a href="https://instagram.com/metafrica_nft" target="_blank">
          <img src={instagram} width="50px" height="50px" style={{margin: "8px"}}/>
        </a>
        {/* </a> */}
        {/* <a
          className="App-link"
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <a href="https://discord.com/channels/939317398203416607/939320995217547274" target="_blank">
          <img src={discord} width="50px" height="50px" style={{margin: "8px"}}/>
        </a>
        {/* </a> */}
        </div>
      </header>
    </div>
  );
}

export default App;
