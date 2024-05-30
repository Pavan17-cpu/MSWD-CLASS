import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { checkboxClasses } from '@mui/material';
import Home from './Home';

function Login({store}) {

  const [login, setLogin] = useState(null);
  const [un,setUn] = useState(null);
  const [pw,setPw] = useState(null);
  function handleForm(event) {
    alert("form submitted");
    event.preventDefault();
    const data = new FormData (event.currentTarget);
     setUn ( data.get("un"));
     setPw ( data.get("pw"));
    axios.get('http://localhost:8001/check',{params:{
      un: data.get("un"),
      pw: data.get("pw")
    }})
    .then((res)=>{
      console.log(res.data)
      setLogin(res.data)
    })
  }

  if(login === null || login === 'FAIL')
  {
    return (
      <div style={{ border:"1px solid red" }} className="App-login">
        <p style={{ border:"1px solid blue" }}>Login goes here</p>
        <form style={{ border:"1px solid green" }} onSubmit={handleForm}>
          User Name: <input type="text" placeholder='un' name="un"/>
          <br/>
          Password: <input type="password" placeholder='pw' name="pw"/>
          <br/><br/>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
  else
  {
    return(
      <div>
        <Home un={un} pw={pw} store={store}/>
      </div>
    );
  }
    
}

export default Login