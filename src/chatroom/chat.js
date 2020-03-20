import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import BookMark from './BookMark';
import information from './information';
import friend from './friend';
import message from './message';
import './chat.css';


class chat extends React.Component {
  render() {
    console.log(this.props);
    return (
      <HashRouter>
        <div className="top">
          <BookMark to="/information" name="Information" />
          <BookMark to="/chat" name="ChatRoom" />
          <BookMark to="/friend" name="Friend" />
        </div>
        <div>
          <Route exact path="/information" component={information} />  
          <Route exact path="/chat" component={message} /> 
          <Route exact path="/friend" component={friend} /> 
        </div>
      </HashRouter>
    );
  }
}

export default chat;
