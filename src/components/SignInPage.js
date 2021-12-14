import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { EmailAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseUIConfig = {
  signInOptions: [
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: "popup",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; // keeps page from automatically redirecting
    },
  },
};

export default function SignInPage() {
  let auth = getAuth();
  return (
    <div>
      <div>
        <p>Sign in</p>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}  aria-label="sign in"/>
      </div>
    </div>
  );
}
