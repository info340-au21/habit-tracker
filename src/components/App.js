import React, { useState, useEffect } from "react";
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {Cards} from "./Cards";
//import SignInPage from "./SignInPage";
import About from "./About";
import { ProfileCard } from "./Profile";
import CARD_DATA from "../data/cards.json";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getDatabase,
  ref,
  set as firebaseSet,
  push as firebasePush,
  onValue,
} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App(props) {
  
/*
  const [currentCards, setCurrentCards] = useState(CARD_DATA);
  // const [newHabit, setNewHabit] = useState('');
  const [cardExpand, setCardExpand] = useState([]);
  */

  const db = getDatabase(); // not the data; "mailing address"

  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  const user = onAuthStateChanged(auth, (currentUser) => {
    if (user) {
    } else {
    }
  });

  /*
  useEffect(() => {
    // function when component first loads
    const habitRef = ref(db, "allHabits");
    onValue(habitRef, (snapshot) => {
      setCurrentCards(snapshot.val()); // extract the value from snapshot
    });

    // instructions on how to leave
    // will be called by React
    function cleanup() {
      // turn off the listener
      console.log("leaving");
    }
    return cleanup; // leave instructions behind
  }, []); // when to re-run (never)
  // addEventListener('databaseValueChange', () => {})
  */
 
  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Cards />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/profile">
          <ProfileCard />
        </Route>
        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
