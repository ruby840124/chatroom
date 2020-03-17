import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

class login extends React.Component {
  render() {
    return (
      <div className="MainBlock">
        <header className="topBlock">
          <img src={require('./asset/logo.JPG')} alt="" ></img>
          <label style={{marginTop:'220px', color:'white'}}>FengChat</label>
        </header>
          <div className="cotentBlock">
            <Link to="/chatroom"><button>back to home</button></Link>
          </div>
        </div>
    );
  }
}

export default login;
