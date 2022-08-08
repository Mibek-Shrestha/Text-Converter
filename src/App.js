

import './App.css';
import Navbar from './components/Navbar';
//  import About from './components/About';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
function App() {
  const [mode, setMode] = useState('light');//wheter dark mode is enable or nont
const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#273b68de';
    }else{
      setMode('light');
      document.body.style.background = 'white';
    }
  }
return (
    <>
       <Navbar title="TextTile" aboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>
       <div className="container my-3">
       <TextForm heading="Enter the text to analyze below" mode={mode}/> 
    
       </div>
       
    </>
   
  );
}

export default App;
