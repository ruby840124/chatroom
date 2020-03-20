import React from 'react';
import login from './login';
import home from './home';
import chat from './chatroom/chat';
import signup from './signup';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={home} />  
          <Route exact path="/login" component={login} /> 
          <Route exact path="/signup" component={signup} /> 
          <Route exact path="/chat" component={chat} /> 
        </Switch>  
      </BrowserRouter>
    );
  }
}


export default App;
