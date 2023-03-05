import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "532933930536-a01qbojhudn3087spmkcjg3a7givi7dv.apps.googleusercontent.com"

const Login = () => {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user:", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! Current user:", res);
    }

  return (
    <div id="signInButton">
      <GoogleLogin
        ClientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login;
