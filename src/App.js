import React from 'react';
import { Avatar } from '@mui/material';
import './styles/App.css';
import LinkItem from './components/LinkItem';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        <Avatar className='Avatar' alt='Henry Cevallos'>HC</Avatar>

        <div className='Link-box'>
          <LinkItem iconName='github' description='Github Profile'/>
          <LinkItem iconName='linkedin' description='LinkedIn Profile'/>
          <LinkItem iconName='email' description='Email'/>
          <LinkItem iconName='location' description='New York, NY'/>
        </div>

      </header>

      <body>

      </body>
    </div>
  );
}

export default App;
