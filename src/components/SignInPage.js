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

export default function SignInPage() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return observer;
  });

  if (user) {
    return <Redirect to="/home" />;
  } else {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
      </div>
    );
  }
}
