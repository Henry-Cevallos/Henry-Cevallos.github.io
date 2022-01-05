import React from 'react';
import { Avatar } from '@mui/material';
import LinkItem from './components/LinkItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar className='Avatar'/>

        <div className='Link-box'>
          <LinkItem />
        </div>
      </header>
    </div>
  );
}

export default App;
