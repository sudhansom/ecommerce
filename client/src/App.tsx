import React from 'react';

import './App.css';
import GoogleLogin from 'react-google-login'


function App() {
  const responseGoogle = (response: any) => {
  console.log(response.tokenId);
}
  return (
    <div className="App">
       <GoogleLogin
    clientId="1055268114660-v6c1ohs1dc1h9nnqicoglnire4sse33l.apps.googleusercontent.com"
    // {process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
