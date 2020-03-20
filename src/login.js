import React from 'react';
import {Link,Redirect, Route} from "react-router-dom";
import './App.css';

class login extends React.Component {
  render() {
    const account = this.props.location.state.account;
    return (
      <div className="MainBlock">
        <header className="topBlock">
          <img className="log" src={require('./asset/logo.JPG')} alt="" ></img>
          <label style={{fontSize:'28px',color:'white'}}>FengChat</label>
          <label style={{fontSize:'16px',margin:'8px 0'}}>welcome {account}!</label>
        </header>
          <div className="cotentBlock">
            <Link to='/chat#/Information'><button>start to chat</button></Link>
            <Link to="/"><button>back to home</button></Link>
          </div>
        </div>
    );
  }
}

export default login;
