import React from 'react';
import login from './login';
import home from './home';
import signup from './signup';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/chatroom" component={home} />  
          <Route exact path="/chatroom/login" component={login} /> 
          <Route exact path="/chatroom/signup" component={signup} /> 
      </BrowserRouter>
    );
  }
}


export default App;
