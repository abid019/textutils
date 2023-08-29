import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import { Routes, Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [Name,setName] = useState('DarkMode')
  const [alert, setalert] = useState(null)
  const showAlert = (message,type)=>{
    setalert({
      type : type,
      message : message
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  const handlemode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b2f61';
      setName('LightMode');
      showAlert('Dark mode is enable','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setName('DarkMode');
      showAlert('Light mode is enable','success')
    }
  }
  return (
    <div>
    <Navbar className="" mode={mode} handlemode={handlemode} Name={Name}/>
    <Alert alert={alert}/> 
    <Routes>   
      <Route exact path='/' element={<Form title="Enter your text here" mode={mode} showAlert={showAlert}/>} />
      <Route exact path='/about' element={<About mode={mode}/>}/>
    </Routes>
    
   
    </div>
  );
}

export default App;
