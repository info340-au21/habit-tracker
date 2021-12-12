import React, { useState, useEffect } from "react";
import { NavBar, CardList, AddCard, ExpandCard, Footer } from "./HomePage";
import SignInPage from "./SignInPage";
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
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  useEffect(() => {
    // function when component first loads
    const habitRef = ref(db, "allHabits");
    onValue(habitRef, (snapshot) => {
      const allHabits = snapshot.val(); // extract the value from snapshot
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

  const addCard = (cardTitle, cardDescription) => {
    // update the database
    const newHabit = {
      cardTitle: cardTitle,
      cardText: cardDescription,
      timestamp: Date.now(),
      // cardImage: "img/wake-up.jpg",
      // cardImageAlt: "Person waking up"
    };
    const habitRef = ref(db, "allHabits/" + user.uid);

    setCurrentCards([...currentCards, newHabit]);
    firebaseSet(habitRef, currentCards);

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
        key={1}
      />,
    ];
  }

  return (
    <div>
      <NavBar />

      <main className="container">
        <Switch>
          <Route exact path="/">
            <CardList cardHistory={CARD_DATA} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
