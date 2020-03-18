import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

class chat extends React.Component {
  render() {
    return (
      <div className="MainBlock">
        <header className="topBlock">
          <img src={require('./asset/logo.JPG')} alt="" ></img>
          <label style={{fontSize:'28px',color:'white'}}>FengChat</label>
        </header>
          <div className="cotentBlock">
            <p>start chat</p>
          </div>
        </div>
    );
  }
}

export default chat;
