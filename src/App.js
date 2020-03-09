import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //登入會員
  loginFunctoion = () => {
      alert("loginFunctoion");
  };

  //登入會員的程式碼
  signUpFunctoion = () => {
      alert("signUpFunctoion");
  };

  //到螢幕上的元件
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./asset/logo.JPG')}></img>
          <p>FengChat</p>
          <button onClick={this.loginFunctoion}>Login</button>
          <button onClick={this.signUpFunctoion}>Sign up</button>
        </header>
      </div>
    );
  }
}


export default App;
