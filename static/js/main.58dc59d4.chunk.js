(this.webpackJsonpfengchat=this.webpackJsonpfengchat||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.18fad0a3.JPG"},33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){var n={"./ChatRoom.svg":60,"./Friend.svg":61,"./Information.svg":62};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=59},60:function(e,t,a){e.exports=a.p+"static/media/ChatRoom.190e2f8a.svg"},61:function(e,t,a){e.exports=a.p+"static/media/Friend.f1be32a3.svg"},62:function(e,t,a){e.exports=a.p+"static/media/Information.d6527dc3.svg"},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(30),r=a.n(o),l=(a(38),a(7)),s=a(8),i=a(10),u=a(9),m=a(11),h=a(5),p=(a(23),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.location.state.account;return c.a.createElement("div",{className:"MainBlock"},c.a.createElement("header",{className:"topBlock"},c.a.createElement("img",{src:a(24),alt:""}),c.a.createElement("label",{style:{fontSize:"28px",color:"white"}},"FengChat"),c.a.createElement("label",{style:{fontSize:"16px",margin:"8px 0"}},"welcome ",e,"!")),c.a.createElement("div",{className:"cotentBlock"},c.a.createElement(h.c,{to:"/chat"},c.a.createElement("button",null,"start to chat")),c.a.createElement(h.c,{to:"/"},c.a.createElement("button",null,"back to home"))))}}]),t}(c.a.Component)),d=a(15),f=a(13),g=a.n(f),b={apiKey:"AIzaSyDTaUGrEK6VmbfoSuVbZGaa0j4oZd8UoKU",authDomain:"fengchat-93bae.firebaseapp.com",databaseURL:"https://fengchat-93bae.firebaseio.com",projectId:"fengchat-93bae",storageBucket:"fengchat-93bae.appspot.com",messagingSenderId:"213640623326",appId:"1:213640623326:web:4eb0c94e117a3b1fb0be4f",measurementId:"G-PE2XN0LN8M"},E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getUserData=function(){var e=g.a.firestore().collection("account"),t=[];e.get().then((function(e){e.forEach((function(e){t.push(e.data())})),a.setState({data:t})}))},a.accountChange=function(e){a.setState({account:e.target.value})},a.passwordChange=function(e){a.setState({password:e.target.value})},a.checkLoginAlert=function(){for(var e=a.state,t=e.account,n=e.password,c=e.data,o=[],r=[],l=0;l<c.length;l++)o.push(c[l].account),r.push(c[l].password);0!==t.length&&0!==n.length?-1!==o.indexOf(t)?r[o.indexOf(t)]!==n?alert("The password is the wrong."):a.setState({login:!0}):alert("no such account."):alert("Please enter the password or account.")},a.state={account:"",password:"",data:[],login:!1},g.a.apps.length||g.a.initializeApp(b),g.a.analytics(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.state,t=e.account,n=e.password,o=e.login;return c.a.createElement("div",{className:"MainBlock"},c.a.createElement("header",{className:"topBlock"},c.a.createElement("img",{src:a(24),alt:""}),c.a.createElement("label",{style:{fontSize:"28px",color:"white"}},"FengChat"),c.a.createElement("label",{style:{fontSize:"22px"}},"Home")),c.a.createElement("div",{className:"cotentBlock"},c.a.createElement("div",{style:{display:"inline"}},c.a.createElement("input",{type:"text",placeholder:"account",value:t,onChange:this.accountChange})),c.a.createElement("div",{style:{display:"inline"}},c.a.createElement("input",{type:"password",placeholder:"password",value:n,onChange:this.passwordChange})),c.a.createElement(d.b,null,o?c.a.createElement(d.a,{to:{pathname:"/login",state:{account:t}}}):c.a.createElement(d.a,{to:"/"})),c.a.createElement("button",{style:{marginTop:"15px",fontSize:"2vw"},onClick:this.checkLoginAlert},"login"),c.a.createElement(h.c,{to:"/signup"},c.a.createElement("button",{style:{fontSize:"2vw"}},"Sign up"))))}}]),t}(c.a.Component),v=(a(58),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(d.b,{exact:!0,path:this.props.to,children:function(t){var n="bookMark";return t.match?n+=" select_bookMark":n="bookMark",c.a.createElement(h.c,{to:e.props.to},c.a.createElement("button",{className:n},c.a.createElement("img",{src:a(59)("./"+e.props.name+".svg"),alt:""}),c.a.createElement("br",null),c.a.createElement("label",null,e.props.name)))}})}}]),t}(c.a.Component)),y=function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(h.b,null,c.a.createElement("div",{className:"top"},c.a.createElement(v,{to:"/information",name:"Information"}),c.a.createElement(v,{to:"/chat",name:"ChatRoom"}),c.a.createElement(v,{to:"/friend",name:"Friend"})))}}]),t}(c.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,a.getUserData=function(){var e=g.a.firestore().collection("account"),t=[];e.get().then((function(e){e.forEach((function(e){t.push(e.data())})),a._isMounted&&a.setState({data:t})}))},a.nameChange=function(e){a.setState({name:e.target.value})},a.passwordChange=function(e){a.setState({password:e.target.value})},a.accountChange=function(e){a.setState({account:e.target.value})},a.genderChange=function(e){a.setState({gender:e.target.value})},a.checkAccount=function(e){for(var t=a.state.data,n=[],c=0;c<t.length;c++)n.push(t[c].account);return n.indexOf(e)+1},a.signUp=function(){var e=a.state,t=e.name,n=e.account,c=e.password,o=e.gender;if(0!==t.length&&0!==n.length&&0!==c.length)if(a.checkAccount(n))alert("The account can't use.");else if(n.length<=6)alert("The account's length at least 6.");else{g.a.firestore().collection("account").doc(n).set({name:t,account:n,password:c,gender:o}).then((function(){alert("sign up successful!"),a.setState({submit:!0})}))}else alert("Please make sure your fields are filled out.")},a.state={name:"",account:"",password:"",gender:"female",data:[],submit:!1},g.a.apps.length||g.a.initializeApp(b),g.a.analytics(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getUserData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.account,o=e.password,r=e.gender,l=e.submit;return c.a.createElement("div",{className:"MainBlock"},c.a.createElement("header",{className:"topBlock"},c.a.createElement("img",{src:a(24),alt:""}),c.a.createElement("label",{style:{fontSize:"28px",color:"white"}},"FengChat"),c.a.createElement("label",{style:{fontSize:"22px"}},"Signup")),c.a.createElement("div",{className:"cotentBlock"},c.a.createElement("input",{type:"text",placeholder:"name",value:t,onChange:this.nameChange}),c.a.createElement("input",{type:"text",placeholder:"account",value:n,onChange:this.accountChange}),c.a.createElement("input",{type:"password",placeholder:"password",value:o,onChange:this.passwordChange}),c.a.createElement("div",{style:{display:"inline"}},c.a.createElement("label",null,"gender:  "),c.a.createElement("select",{style:{marginBottom:"10px"},name:"gender",value:r,onChange:this.genderChange},"\u3000            ",c.a.createElement("option",{value:"female"},"female"),"\u3000            ",c.a.createElement("option",{value:"man"},"man"))),c.a.createElement("button",{onClick:this.signUp},"submit"),c.a.createElement(d.b,null,l?c.a.createElement(d.a,{to:"/"}):c.a.createElement(d.a,{to:"/signup"})),c.a.createElement(h.c,{to:"/"},c.a.createElement("button",null,"back to home"))))}}]),t}(c.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,{basename:"/chatroom"},c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/",component:E}),c.a.createElement(d.b,{exact:!0,path:"/login",component:p}),c.a.createElement(d.b,{exact:!0,path:"/signup",component:k}),c.a.createElement(d.b,{exact:!0,path:"/chat",component:y})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.58dc59d4.chunk.js.map