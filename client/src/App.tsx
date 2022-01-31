import React from 'react';

import './App.css';
import GoogleLogin from 'react-google-login'


function App() {
  const responseGoogle = (response: any) => {
  console.log(response);
}
  return (
    <div className="App">
       <GoogleLogin
    clientId="446627249737-sj7pmkvsibbf16vkhrsaqqt3kmi42n7j.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
