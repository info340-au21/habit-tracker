import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseUIConfig = {
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
        GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => {
            return false; // keeps page from automatically redirecting
        }
    }
};

export default function SigninPage(props) {
    const auth = getAuth();

    return (
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    );
 }