import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  EmailAuthProvider,
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

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

// const signout = () => {
//   signOut
//     .then(function () {
//       console.log();
//     })
//     .catch(function () {
//       console.log();
//     });
// };

export default function SignInPage(props) {
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseUIConfig}
        firebaseAuth={getAuth()}
      />
    </div>
  );
}
