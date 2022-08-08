
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
function App() {
  const [mode,setMode] = useState('light');//wheter dark mode is enable or nont
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
