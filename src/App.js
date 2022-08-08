

import './App.css';
import Navbar from './components/Navbar';
//  import About from './components/About';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
function App() {
  const [mode, setMode] = useState('dark');//wheter dark mode is enable or nont
  return (
    <>
       <Navbar title="TextTile" aboutText="AboutUs" mode={mode} />
       <div className="container my-3">
       <TextForm heading="Enter the text to analyze below"/> 
   
       </div>
       
    </>
   
  );
}

export default App;
