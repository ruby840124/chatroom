(this.webpackJsonpfengchat=this.webpackJsonpfengchat||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.18fad0a3.JPG"},33:function(e,t,a){e.exports=a(58)},38:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(30),r=a.n(c),l=(a(38),a(10)),s=a(11),i=a(13),u=a(12),h=a(14),m=a(9),p=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"MainBlock"},o.a.createElement("header",{className:"topBlock"},o.a.createElement("img",{src:a(24),alt:""}),o.a.createElement("label",{style:{marginTop:"220px",color:"white"}},"FengChat")),o.a.createElement("div",{className:"cotentBlock"},o.a.createElement(m.b,{to:"/chatroom"},o.a.createElement("button",null,"back to home"))))}}]),t}(o.a.Component)),d=a(7),g=a.n(d),f={apiKey:"AIzaSyDTaUGrEK6VmbfoSuVbZGaa0j4oZd8UoKU",authDomain:"fengchat-93bae.firebaseapp.com",databaseURL:"https://fengchat-93bae.firebaseio.com",projectId:"fengchat-93bae",storageBucket:"fengchat-93bae.appspot.com",messagingSenderId:"213640623326",appId:"1:213640623326:web:4eb0c94e117a3b1fb0be4f",measurementId:"G-PE2XN0LN8M"},b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).getUserData=function(){var e=g.a.firestore().collection("account"),t=[];e.get().then((function(e){e.forEach((function(e){t.push(e.data())})),a.setState({data:t})}))},a.accountChange=function(e){a.setState({account:e.target.value})},a.passwordChange=function(e){a.setState({password:e.target.value})},a.checkLoginAlert=function(){for(var e=a.state,t=e.account,n=e.password,o=e.data,c=[],r=[],l=0;l<o.length;l++)c.push(o[l].account),r.push(o[l].password);0!==t.length&&0!==n.length?-1!==c.indexOf(t)?r[c.indexOf(t)]!==n?alert("The password is the wrong."):window.location.assign("/chatroom/login"):alert("no such account."):alert("Please enter the password or account.")},a.state={account:"",password:"",data:[]},g.a.apps.length||g.a.initializeApp(f),g.a.analytics(),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getUserData()}},{key:"render",value:function(){var e=this.state,t=e.account,n=e.password;return o.a.createElement("div",{className:"MainBlock"},o.a.createElement("header",{className:"topBlock"},o.a.createElement("img",{src:a(24)}),o.a.createElement("label",{style:{fontSize:"28px",color:"white"}},"FengChat"),o.a.createElement("label",{style:{fontSize:"22px"}},"Home")),o.a.createElement("div",{className:"cotentBlock"},o.a.createElement("div",{style:{display:"inline"}},o.a.createElement("input",{type:"text",placeholder:"account",value:t,onChange:this.accountChange})),o.a.createElement("div",{style:{display:"inline"}},o.a.createElement("input",{type:"password",placeholder:"password",value:n,onChange:this.passwordChange})),o.a.createElement(m.b,{to:"/chatroom/login"},o.a.createElement("button",{style:{marginTop:"15px"}},"login")),o.a.createElement(m.b,{to:"/chatroom/signup"},o.a.createElement("button",{style:{marginTop:"5px"}},"Sign up"))))}}]),t}(o.a.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,a.getUserData=function(){var e=g.a.firestore().collection("account"),t=[];e.get().then((function(e){e.forEach((function(e){t.push(e.data())})),a._isMounted&&a.setState({data:t})}))},a.nameChange=function(e){a.setState({name:e.target.value})},a.passwordChange=function(e){a.setState({password:e.target.value})},a.accountChange=function(e){a.setState({account:e.target.value})},a.genderChange=function(e){a.setState({gender:e.target.value})},a.checkAccount=function(e){for(var t=a.state.data,n=[],o=0;o<t.length;o++)n.push(t[o].account);return n.indexOf(e)+1},a.signUp=function(){var e=a.state,t=e.name,n=e.account,o=e.password,c=e.gender;0!==t.length&&0!==n.length&&0!==o.length?a.checkAccount(n)?alert("The account can't use."):g.a.firestore().collection("account").doc(n).set({name:t,account:n,password:o,gender:c}).then((function(){alert("sign up successful!"),window.location.assign("/chatroom")})):alert("Please make sure your fields are filled out.")},a.state={name:"",account:"",password:"",gender:"female",data:[]},g.a.apps.length||g.a.initializeApp(f),g.a.analytics(),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getUserData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.account,c=e.password,r=e.gender;return o.a.createElement("div",{className:"MainBlock"},o.a.createElement("header",{className:"topBlock"},o.a.createElement("img",{src:a(24),alt:""}),o.a.createElement("label",{style:{fontSize:"28px",color:"white"}},"FengChat"),o.a.createElement("label",{style:{fontSize:"22px"}},"Signup")),o.a.createElement("div",{className:"cotentBlock"},o.a.createElement("input",{type:"text",placeholder:"name",value:t,onChange:this.nameChange}),o.a.createElement("input",{type:"text",placeholder:"account",value:n,onChange:this.accountChange}),o.a.createElement("input",{type:"password",placeholder:"password",value:c,onChange:this.passwordChange}),o.a.createElement("div",{style:{display:"inline"}},o.a.createElement("label",null,"gender:  "),o.a.createElement("select",{style:{marginBottom:"10px"},name:"gender",value:r,onChange:this.genderChange},"\u3000            ",o.a.createElement("option",{value:"female"},"female"),"\u3000            ",o.a.createElement("option",{value:"man"},"man"))),o.a.createElement("button",{onClick:this.signUp},"submit"),o.a.createElement(m.b,{to:"/chatroom"},o.a.createElement("button",null,"back to home"))))}}]),t}(o.a.Component),v=a(15),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/chatroom",component:b}),o.a.createElement(v.a,{exact:!0,path:"/chatroom/login",component:p}),o.a.createElement(v.a,{exact:!0,path:"/chatroom/signup",component:E})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1e3d2272.chunk.js.map