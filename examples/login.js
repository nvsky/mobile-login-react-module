require('../src/login.less');
const React = require('react');
const ReactDOM = require('react-dom');
const Login = require('mobile-login-module');


const Test = React.createClass({
  getCode(phoneVlue) {
    console.log(phoneVlue);
  },
  getLogin(phoneVlue, codeValue) {
    console.log(phoneVlue+'#'+codeValue);
  },
  render() {
    return (<div style={{margin: 0}}>
      <Login getCode={this.getCode}
        getLogin={this.getLogin}
      />
    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
