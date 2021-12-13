import React, { useState, useEffect } from "react";
import { CardList, ExpandCard } from "./CardFunctions";
import { AddCard } from "./AddHabitCard";
import {
  getDatabase,
  ref,
  set as firebaseSet,
  push as firebasePush,
  onValue,
} from "firebase/database";

export default function Cards(props) {
  const [currentCards, setCurrentCards] = useState([]);
  const db = getDatabase();
  const habitRef = ref(db, "habits/" + props.user.uid);

  // code from lecture demo
  useEffect(() => {
    //function when component first loads
    //addEventListener('databaseValueChange', () => {})
    const offFunction = onValue(habitRef, (snapshot) => {
      const allHabits = snapshot.val(); //extract the value from the snapshot
      if (allHabits == null) {
        setCurrentCards([]);
      } else {
        setCurrentCards(allHabits);
      }
    });

    //instructions on how to leave will be called by React when component unmounts
    function cleanup() {
      offFunction(); //turn the listener off
    }
    return cleanup; //leave the instructions behind
  }, [db]); //when to re-run (never)
  const [cardExpand, setCardExpand] = useState([]);

  const updateCompletion = (cardDescription) => {
    const updatedArray = currentCards.map((item, index) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          cardImage: item.cardImage,
          cardImageAlt: item.cardImageAlt,
          impact: item.impact,
          completeCount: item.completeCount + 1,
        };
      }
    });
    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };
  const removeCard = (cardTitle) => {
    let removalIndex = -1;

    let updatedArray = currentCards.map((item, index) => {
      if (item.cardTitle !== cardTitle) {
        return item;
      } else {
        removalIndex = index;
        return;
      }
    });

    updatedArray.splice(removalIndex, 1);
    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  const addCard = (cardTitle, cardDescription) => {
    // update the database
    const newHabit = {
      cardTitle: cardTitle,
      cardText: cardDescription,
      cardImage: "",
      cardImageAlt: "",
      impact: "=",
      completeCount: 0,
    };

    //handle errors in firebase
    const updatedArray = [...currentCards, newHabit];
    //setCurrentCards(updatedArray);
    //firebaseSet(habitRef, updatedArray);
    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  const displaySingleCard = (cardTitle) => {
    let displayIndex = -1;

    let updatedArray = currentCards.map((item, index) => {
      if (item.cardTitle !== cardTitle) {
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

  let cardForm = <AddCard howToAddCard={addCard} key={2} />;

  // render homepage based on expansion
  let view;
  if (cardExpand.length === 0) {
    view = [
      <CardList
        cardHistory={currentCards}
        howToRemove={removeCard}
        singleDisplay={displaySingleCard}
        updateCount={updateCompletion}
        key={1}
      />,
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
    <div id="homepage-background">
      <h1>Current Habits</h1>
      <div className="d-flex justify-content-center">{cardForm}</div>
      {view}
    </div>
  );
}
