import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { HomePage } from "./Cards";
import SignInPage from "./SignInPage";
import About from "./About";
import { ProfileCard } from "./Profile";
import { Route, Switch, Redirect } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ProfilePage } from "./ProfilePage";

function App(props) {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return observer;
  });

  // const signout = () => {
  //   signOut
  //     .then(function () {
  //       console.log();
  //     })
  //     .catch(function () {
  //       console.log();
  //     });
  // };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route exact path="/">
          <SignInPage user={user} />
        </Route>

        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
          <ProfileCard />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
