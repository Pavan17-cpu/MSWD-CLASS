import Login from "./components/Login";
import Registration from "./components/Registration";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Container, AppBar, Toolbar} from '@material-ui/core';
import logo from './logo.svg'
import './App.css'
import Home from "./components/Home";


function App({store}) 
{

  console.log(store.getState())
  function Page()
  {
   if(store.getState().NavReducer == "Login")
   {
    return( 
      <div>
        <Login store={store}/>
      </div>
    );
   } 
   if(store.getState().NavReducer == "Registration")
   {
    return( 
      <div>
       <Registration/>
      </div>
    );
   } 
  }

  return(
    <div className="App">
      <div className="App-header">
      <img src={logo} alt="not" className="App-logo" style={{width:"120px",height:"120px"}}/>
      <h1> Website TITLE Goes Here </h1> 
    </div>

    <div className="App-body">
    <Container>
    <Navigation store={store}/>
      <Page/>
    </Container>
    </div>
  </div>
  );
}

export default App;
