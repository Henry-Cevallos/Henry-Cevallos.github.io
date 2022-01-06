import React from 'react';
import { Avatar } from '@mui/material';
import './styles/App.css';
import LinkItem from './components/LinkItem';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        <Avatar className='Avatar' alt='Henry Cevallos' sx={{width: 150, height: 150, fontSize: 50}}>HC</Avatar>

        <div className='Link-box'>
          <LinkItem iconName='github' description='Github Profile'/>
          <LinkItem iconName='linkedin' description='LinkedIn Profile'/>
          <LinkItem iconName='email' description='Email'/>
          <LinkItem iconName='location' description='New York, NY'/>
        </div>

      </header>

      <body className='App-body'>

        <div className='Section-start About-Section'>
          <h2 className='Section-title'>About Me</h2>
          <div className='About-text'>
          Hi! I'm Henry an aspiring software engineer looking to provide smart solutions to everyday problems.
          Currently I am a Computer Science student graduating May 2022 Magna Cum laude. I am looking to apply
          all my knowledge in a meaningful way within the tech industry.
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
