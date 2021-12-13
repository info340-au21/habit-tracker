import React, { useState, useEffect } from "react";
import { NavBar, CardList, AddCard, ExpandCard, Footer } from "./HomePage";
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
  const [currentCards, setCurrentCards] = useState(CARD_DATA);
  // const [newHabit, setNewHabit] = useState('');
  const [cardExpand, setCardExpand] = useState([]);

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
  const addCard = (cardTitle, cardDescription) => {
    // update the database
    const newHabit = {
      cardTitle: cardTitle,
      cardText: cardDescription,
      timestamp: Date.now(),
      completeCount: 0,
    };
    const habitRef = ref(db, "allHabits/" + currentUser.uid);

    const updatedArray = [...currentCards, newHabit];
    setCurrentCards(updatedArray);
    firebaseSet(habitRef, updatedArray);

    // const updatedArray = [...currentCards, newCard];
    // setCurrentCards(updatedArray);
  };

  const removeCard = (cardDescription) => {
    let removalIndex = -1;

    let updatedArray = currentCards.map((item, index) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        removalIndex = index;
        return;
      }
    });

    updatedArray.splice(removalIndex, 1);
    setCurrentCards(updatedArray);
  };

  const displaySingleCard = (cardDescription) => {
    let displayIndex = -1;

    let updatedArray = currentCards.map((item, index) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        displayIndex = index;
        return;
      }
    });

    let focus = currentCards[displayIndex];
    let res = [
      {
        cardTitle: focus.cardTitle,
        cardText: focus.cardText,
        cardImage: focus.cardImage,
        cardImageAlt: focus.cardImageAlt,
        impact: focus.impact,
        completeCount: focus.completeCount,
      },
    ];

    setCardExpand(res);
  };

  const revertToMainCardView = () => {
    setCardExpand([]);
  };

  // render homepage based on expansion
  let view;
  if (cardExpand.length === 0) {
    view = [
      <CardList
        cardHistory={currentCards}
        howToRemove={removeCard}
        singleDisplay={displaySingleCard}
        key={1}
      />,
      <AddCard howToAddCard={addCard} key={2} />,
    ];
  } else {
    view = [
      <ExpandCard
        card={cardExpand}
        howToRevert={revertToMainCardView}
        howToRemove={removeCard}
        key={1}
      />,
    ];
  }

  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          {view}
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
