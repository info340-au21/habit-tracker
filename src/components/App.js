import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cards from "./Cards";
import SignInPage from "./SignInPage";
import About from "./About";
import Stats from "./Stats";
import { Route, Switch, Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    // code from lecture demos
    const auth = getAuth();

    //addEventListener("loginEvent", () => {})
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        //have a user
        console.log("logging in", firebaseUser);
        setCurrentUser(firebaseUser);
      } else {
        console.log("logging out");
        setCurrentUser(null);
      }
    });

    return () => {
      //cleanup
      unregisterAuthListener();
    };
  }, []);

  // const loginUser = (userId, userName) => {
  //   if (!userId) {
  //     console.log("logging out");
  //     setCurrentUser(null);
  //   } else {
  //     console.log("logging in", userName);
  //     setCurrentUser({ uid: userId, userName: userName });
  //   }
  // };

  // const signout = () => {
  //   signOut
  //     .then(function () {
  //       console.log();
  //     })
  //     .catch(function () {
  //       console.log();
  //     });
  // };

  if (currentUser) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <div>
          <NavBar auth={getAuth()} />
        </div>

        <Switch>
          <Route exact path="/">
            <Cards user={currentUser} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  } else {
    return <SignInPage />;
  }
}
