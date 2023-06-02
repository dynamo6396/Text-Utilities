import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// Everything that you can see in the browser comes after resolving App.js and
//  when you want to start project from here 
// let name=" Jatin"
function App() {
  return (
   <>     
   {/* <Navbar title="App" aboutText="aboutusss"/> */}
   <Navbar title="App" />
   <div className="container">
    <TextForm heading="Enter the text to anlyze"/>
   </div>
   </>  
);
}

export default App;
