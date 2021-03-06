import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Cards from "./Cards";
import SignInPage from "./SignInPage";
import About from "./About";
import Stats from "./Stats";
import Recommend from "./Recommend";
import { Route, Switch, Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const auth = getAuth();

    //addEventListener("loginEvent", () => {})
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      //cleanup
      unregisterAuthListener();
    };
  }, []);

  if (currentUser) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <div>
          <NavBar auth={getAuth()} />
        </div>

        <Switch>
          <Route exact path="/" role="link">
            <Cards user={currentUser} />
          </Route>
          <Route exact path="/about" role="link">
            <About />
          </Route>
          <Route exact path="/recommend">
            <Recommend user={currentUser} />
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
