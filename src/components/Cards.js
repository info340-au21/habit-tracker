import React, { useState, useEffect } from "react";
import { CardList, ExpandCard } from "./CardFunctions";
import { AddCard } from "./AddHabitCard";
import {
  getDatabase,
  ref,
  set as firebaseSet,
  onValue,
} from "firebase/database";

export default function Cards(props) {
  const [currentCards, setCurrentCards] = useState([]);
  const [currentAllHabits, setCurrentAllHabits] = useState([]);
  const [recs, setRecs] = useState([]);
  const [currentMax, setMax] = useState(null);
  const [currentMin, setMin] = useState(null);
  const db = getDatabase();
  const allHabitsRef = ref(db, "habits");
  const recRef = ref(db, "recommend");
  const habitRef = ref(db, "habits/" + props.user.uid + "/habits");
  const maxRef = ref(db, "habits/" + props.user.uid + "/maxStreak");
  const minRef = ref(db, "habits/" + props.user.uid + "/minStreak");

  useEffect(() => {
    const offFunction = onValue(allHabitsRef, (snapshot) => {
      const allHabits = snapshot.val();
      if (allHabits == null) {
        setCurrentAllHabits([]);
      } else {
        setCurrentAllHabits(allHabits);
      }
    });

    function cleanup() {
      offFunction();
    }
    return cleanup;
  }, [db]);

  useEffect(() => {
    const offFunction = onValue(habitRef, (snapshot) => {
      const habits = snapshot.val();
      if (habits == null) {
        setCurrentCards([]);
      } else {
        setCurrentCards(habits);
      }
    });

    function cleanup() {
      offFunction();
    }
    return cleanup;
  }, [db]);

  useEffect(() => {
    const offFunction = onValue(recRef, (snapshot) => {
      const recs = snapshot.val();
      if (recs == null) {
        setRecs([]);
      } else {
        setRecs(recs);
      }
    });

    function cleanup() {
      offFunction();
    }
    return cleanup;
  }, [db]);

  useEffect(() => {
    //function when component first loads
    //addEventListener('databaseValueChange', () => {})
    const offFunction = onValue(maxRef, (snapshot) => {
      const max = snapshot.val(); //extract the value from the snapshot
      setMax(max);
    });

    //instructions on how to leave will be called by React when component unmounts
    function cleanup() {
      offFunction(); //turn the listener off
    }
    return cleanup; //leave the instructions behind
  }, [db]); //when to re-run (never)

  useEffect(() => {
    //function when component first loads
    //addEventListener('databaseValueChange', () => {})
    const offFunction = onValue(minRef, (snapshot) => {
      const min = snapshot.val(); //extract the value from the snapshot
      setMin(min);
    });

    //instructions on how to leave will be called by React when component unmounts
    function cleanup() {
      offFunction(); //turn the listener off
    }
    return cleanup; //leave the instructions behind
  }, [db]); //when to re-run (never)

  const [cardExpand, setCardExpand] = useState([]);

  const updateCompletion = (cardDescription) => {
    const updatedArray = currentCards.map((item) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          impact: item.impact,
          streak: item.streak + 1,
          isComplete: item.isComplete,
        };
      }
    });

    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  const decCount = (cardDescription) => {
    const updatedArray = currentCards.map((item) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          impact: item.impact,
          streak: item.streak - 2,
          isComplete: item.isComplete,
        };
      }
    });

    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  const makeCardComplete = (cardDescription) => {
    const updatedArray = currentCards.map((item) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          impact: item.impact,
          streak: item.streak + 1,
          isComplete: true,
        };
      }
    });
    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  const removeComplete = (cardDescription) => {
    const updatedArray = currentCards.map((item) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          impact: item.impact,
          streak: item.streak - 1,
          isComplete: false,
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
      impact: "=",
      streak: 0,
      isComplete: false,
    };

    //handle errors in firebase
    const updatedArray = [...currentCards, newHabit];
    //setCurrentCards(updatedArray);
    //firebaseSet(habitRef, updatedArray);
    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  const displaySingleCard = (cardDescription) => {
    let displayIndex = -1;

    let updatedArray = currentCards.map((item, index) => {
      if (item.cardText === cardDescription) {
        displayIndex = index;
      }
      return item;
    });

    let focus = updatedArray[displayIndex];
    let res = [
      {
        cardTitle: focus.cardTitle,
        cardText: focus.cardText,
        impact: focus.impact,
        streak: focus.streak,
      },
    ];

    setCardExpand(res);
  };
  const revertToMainCardView = () => {
    setCardExpand([]);
  };

  let cardForm = <AddCard howToAddCard={addCard} key={2} />;

  const cardReset = () => {
    const updatedArray = currentCards.map((item) => {
      let newStreak = item.streak;
      if (!item.isComplete) {
        newStreak = 0;
      } else {
        newStreak = item.streak;
      }
      return {
        cardTitle: item.cardTitle,
        cardText: item.cardText,
        impact: item.impact,
        streak: newStreak,
        isComplete: false,
      };
    });

    const max = updatedArray.reduce((item, max) =>
      max.streak > item.streak ? max : item
    );
    const min = updatedArray.reduce((item, max) =>
      max.streak < item.streak ? max : item
    );

    firebaseSet(maxRef, max) //change the database
      .catch((err) => {});
    firebaseSet(minRef, min) //change the database
      .catch((err) => {});
    setMax(max);
    setMin(min);

    for (let user in currentAllHabits) {
      const userData = currentAllHabits[user];
      if (userData.hasOwnProperty("maxStreak")) {
        setRecs(recs.push(userData.maxStreak));
      }
    }

    firebaseSet(recRef, recs) //change the database
      .catch((err) => {});

    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  // render homepage based on expansion
  let view;
  if (cardExpand.length === 0) {
    view = [
      <CardList
        cardHistory={currentCards}
        decCount={decCount}
        howToRemove={removeCard}
        singleDisplay={displaySingleCard}
        updateCount={updateCompletion}
        makeCardComplete={makeCardComplete}
        removeComplete={removeComplete}
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
      <h1>Daily Habits</h1>
      <div className="d-flex justify-content-center">
        <button className="btn" onClick={cardReset} aria-label="reset day">
          Reset Day
        </button>
      </div>
      <div className="d-flex justify-content-center">{cardForm}</div>
      {view}
    </div>
  );
}
