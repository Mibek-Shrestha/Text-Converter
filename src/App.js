
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light');//wheter dark mode is enable or nont
  
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout( ()=>{
        setAlert(null);
      },1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#c459df';
      showAlert("Dark mode had been enabled","sucess");
    }else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("light mode had been enabled","sucess");
    }
  }
return (
    <>
    
       <Navbar title="TextTile" aboutText="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
  
      
  
            
       <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> 
       
         
       
        

       </div>
     
  </>
   
  );
}

export default App;
