import React from 'react';
import reactLogo from './images/react-icon.svg';
import electronLogo from './images/electron-icon.svg';
import jsLogo from './images/javascript-icon.svg';
import './App.css';

import adbkit from '@devicefarmer/adbkit';

function App() {
  function adb() {
    const client = adbkit.createClient();
    client.listDevices()
    .then(function (devices) {
      console.log("entered adb client");
      console.log(devices);
    })
    .catch(function (err) { console.error(err); });
  }
  return (
    <div className='App'>
      <div className='container'>
      <button onClick={adb}>
        List connected devices
      </button>
      </div>
    </div>
  );
}

export default App;
