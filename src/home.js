import React from 'react';
import {Link, Route , Redirect} from "react-router-dom";
import firebase from 'firebase';
import config from "./config";
import './App.css';

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {account:'',password:'', data:[], login:false};

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
    firebase.analytics();
  }

  componentDidMount() {
    this.getUserData();
  }

  //get database data
  getUserData = () => {
    var db = firebase.firestore();
    var ref = db.collection('account');
    let data = [];
    ref.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });
      this.setState({data: data});
    });
  }

  accountChange = (event) =>  {
    this.setState({account: event.target.value});
  }

  passwordChange = (event) =>  {
    this.setState({password: event.target.value});
  }

  checkLoginAlert = () => {
    const {account, password, data} = this.state;
    let accountArray = [];
    let passwordArray = [];
    //get the account and password datas
    for(let i=0 ;i <data.length ; i++){
        accountArray.push(data[i].account);
        passwordArray.push(data[i].password);
    }

    if(account.length === 0 || password.length === 0){
        alert("Please enter the password or account.");
        return;
    }

    //search for correspond account
    if(accountArray.indexOf(account) !== -1){
      //the wrong password
      if(passwordArray[accountArray.indexOf(account)] !== password){
        alert("The password is the wrong.");
      }else{
        this.setState({login: true});
      }
    }else{
        alert("no such account.");
    }

  }

  render() {
    const {account, password, login} = this.state;
    return (
      <div className="MainBlock">
        <header className="topBlock">
          <img  src={require('./asset/logo.JPG')} alt="" />
          <label style={{fontSize:'28px', color:'white'}}>FengChat</label>
          <label style={{fontSize:'22px'}}>Home</label>
        </header>
        <div className="cotentBlock">
          <div style={{display:'inline'}}>
            <input type="text" placeholder="account" value={account} onChange={this.accountChange}/>
          </div>
          <div style={{display:'inline'}}>
            <input type="password" placeholder="password" value={password} onChange={this.passwordChange}/>
          </div> 
          <Route>
            {login ? <Redirect to={{pathname:'/login', state:{account: account}}} /> : <Redirect to="/"/>}
          </Route>
          <button style={{marginTop:'15px', fontSize:'14px'}} onClick={this.checkLoginAlert}>login</button>
          <Link to="/signup"><button style={{fontSize:'14px'}}>Sign up</button></Link>
        </div>
      </div>
    );
  }
}


export default home;