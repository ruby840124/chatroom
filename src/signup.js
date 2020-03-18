import React from 'react';
import {Link, Route , Redirect} from "react-router-dom";
import firebase from 'firebase';
import config from "./config";
import './App.css';

class signup extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {name:'',account:'',password:'', gender:'female',data:[], submit: false};
        // Initialize Firebase
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
      }
        firebase.analytics();
  }

  componentDidMount() {
    this._isMounted = true;
    this.getUserData();
  }

  componentWillUnmount() {
    this._isMounted = false;
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
        if (this._isMounted) {
          this.setState({data: data});
        }
      });
  }

  nameChange = (event) =>  {
    this.setState({name: event.target.value});
  }

  passwordChange = (event) =>  {
    this.setState({password: event.target.value});
  }

  accountChange = (event) =>  {
    this.setState({account: event.target.value});
  }

  genderChange= (event) =>  {
    this.setState({gender: event.target.value});
  }

  checkAccount = (account) => {
    const {data} = this.state;
    let accountArray = [];
    for(let i=0 ;i <data.length ; i++){
        accountArray.push(data[i].account);
    }

    return accountArray.indexOf(account)+1;
  }

  signUp = () =>  {
    const {name, account, password, gender} = this.state;
    if(name.length === 0 || account.length === 0 || password.length === 0){
      alert("Please make sure your fields are filled out.");
      return;
    }else if(this.checkAccount(account)){
      alert("The account can't use.");
    }else if(account.length <= 6){
      alert("The account's length at least 6.");
    }else{
      //put data into database
      var db = firebase.firestore();
      var ref = db.collection('account').doc(account);
      ref.set({
        name: name,
        account: account,
        password: password,
        gender: gender
      }).then(() => {
        alert("sign up successful!");
        this.setState({submit: true});
      });
    }
  }


  render() {
    const {name, account, password, gender, submit} = this.state;
    return (
      <div className="MainBlock">
        <header className="topBlock">
          <img src={require('./asset/logo.JPG')} alt="" ></img>
          <label style={{fontSize:'28px',color:'white'}}>FengChat</label>
          <label style={{fontSize:'22px'}}>Signup</label>
        </header>
        <div className="cotentBlock">
          <input type="text" placeholder="name" value={name} onChange={this.nameChange}/>
          <input type="text" placeholder="account" value={account} onChange={this.accountChange}/>
          <input type="password" placeholder="password" value={password} onChange={this.passwordChange}/>
          <div style={{display:'inline'}}>
            <label>gender:  </label>
            <select style={{marginBottom:'10px'}} name="gender" value={gender} onChange={this.genderChange}>
　            <option value="female">female</option>
　            <option value="man">man</option>
            </select>
          </div>
          <button onClick={this.signUp}>submit</button>
          <Route>
            {submit ? <Redirect to="/"/> : <Redirect to="/signup"/>}
          </Route>
          <Link to="/"><button>back to home</button></Link>
        </div>
      </div>
    );
  }
}


export default signup;