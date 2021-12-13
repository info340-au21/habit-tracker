import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  getAuth,
  EmailAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Redirect } from "react-router-dom";

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

const signout = () => {
  signOut
    .then(function () {
      console.log();
    })
    .catch(function () {
      console.log();
    });
};

export default function SignInPage(props) {
  let user = props.user;

  if (user) {
    console.log(user);
    return <Redirect to="/home" />;
  } else {
    console.log(user);
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={firebaseUIConfig}
          firebaseAuth={getAuth}
        />
      </div>
    );
  }
}
