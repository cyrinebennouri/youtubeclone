import React from 'react';
import './App.css';
import MainVideo from './Components/MainVid';
import BlockVideos from './Components/Block';
import BlockVideos1 from './Components/Block1';
import BlockVideos2 from './Components/Block2';

import Navbar from './Components/NavBar'


function App() {
  return (
    <div className='container-fluid'> 
    <Navbar/> 
      <div className='row mt-3'>
        <MainVideo/>
        <BlockVideos /> 
        
        <BlockVideos1 /> 
       
        <BlockVideos2 /> 
     


      </div>
     
    </div>
    
  );
}

export default App
