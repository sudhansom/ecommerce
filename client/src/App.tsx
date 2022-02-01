import React, { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import GoogleLogin from 'react-google-login'

type Response = {
  token: string
}
type RequestHeaderTypes = {
  token: string
}

function App() {
  axios.defaults.baseURL='http://localhost:5000/api/v1'
  const responseGoogle = async (response: any) => {
  console.log(response.tokenId);
  const tokenId = response.tokenId
  const result = await axios.post('/login', {
    id_token: tokenId,

  })
  console.log(result.data)
  localStorage.setItem("token", result.data)
}
const getAllMovies = async () => {
  
    const result = await axios.get('/movies')
    console.log("allMoviee:", result)
  }

useEffect(()=>{
   getAllMovies()
  
},[])
  return (
    <div className="App">
       <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;
