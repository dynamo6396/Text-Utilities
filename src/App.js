import logo from './logo.svg';
import './App.css';
// Everything that you can see in the browser comes after resolving App.js and
//  when you want to start project from here 
// let name=" Jatin"
function App() {
  return (
    //JSX is totaly html(90-95%) with some changes 
    // class is change to className
    // for is change into htmlFor 
    // tabindex is change into tabIndex 

    // Below line is not valid because in jsx all things are incompose in the single <> </> here you create two 
    // Or you can use jsx fragments like enclose multiple braces in a single one <> </>
    // <h1></h1>
    // <>
   
    //     <h1>This is me</h1>
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //         Jatin Learning React 
    //         </a>
    //       </header>
    //     </div>
    // </>

    // NOW I am going to writtend JSX By own 
    <>
     {/* <div className="blank">Lovely</div> 
    <nav>
      <li>home</li>
      <li>about</li>
      <li>contact</li>
      here anyting written in the {} is going to be resolve becoz it is
      <h1>Hello{name}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure asperiores ab ut repudiandae corrupti provident ad sit in sunt sequi, et, quod illum qui modi, non ipsam hic ipsa. Labore ducimus omnis voluptate eum optio dolores incidunt eius. Rerum culpa veritatis reprehenderit rem corrupti illo.</p>
    </nav> */}

    {/* bootstarp for navbar */}
    
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">MYREACTAPP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>

  
);
}

export default App;
