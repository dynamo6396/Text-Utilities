import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
// Everything that you can see in the browser comes after resolving App.js and
//  when you want to start project from here 
// let name=" Jatin"
function App() {
  const [mode,setMode]=useState('light');    // wheather dark mode enabled or not 
  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showalert("dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showalert("light Mode has been enabled", "success")
    }
  }
  return (
   <>  
   {/* <Navbar title="App" aboutText="aboutusss"/> */}
   <Navbar title="App" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container">
      <TextForm  showalert={showalert} heading="Enter the text to anlyze" mode={mode} />
      {/* <About  mode={mode}/> */}
   </div>
   </>  
  );
}

export default App;
