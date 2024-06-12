// src/components/Auth/GoogleAuth.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuth = ({ onLoginSuccess }) => {
    const handleSuccess = (response) => {
        console.log('Google Auth Success:', response);
        onLoginSuccess(response.profileObj);
    };

    const handleFailure = (response) => {
        console.log('Google Auth Failure:', response);
    };

    return (
        <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleAuth;
