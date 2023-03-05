import { GoogleLogout } from 'react-google-login';
import React from 'react';

const clientId = "532933930536-a01qbojhudn3087spmkcjg3a7givi7dv.apps.googleusercontent.com"

function Logout() {
  
    const onSuccess = () => {
        console.log("Log out sucessfull!");
    }

    return (
    <div>
      <GoogleLogout 
        ClientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout;
