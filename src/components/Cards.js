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
  const [currentMax, setMax] = useState(null);
  const [currentMin, setMin] = useState(null);
  const db = getDatabase();
  const habitRef = ref(db, props.user.uid + "/habits");
  const maxRef = ref(db, props.user.uid + "/maxStreak");
  const minRef = ref(db, props.user.uid + "/minStreak");

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

  // code from lecture demo
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

  // code from lecture demo
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
    console.log(cardDescription);

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
      console.log(item.cardDescription);
      return item;
    });

    let focus = updatedArray[displayIndex];
    console.log(focus);
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

    // let maxStreak = -Infinity;
    // let minStreak = Infinity;
    // let maxStreakHabit = [];
    // let minStreakHabit = [];
    // const topStreaks = updatedArray.map((item) => {
    //   if (item.streak >= maxStreak) {
    //     maxStreakHabit.push(item);
    //     maxStreak = item.streak;

    //     // for-each loop through maxStreakHabit
    //     // if each streak is lower than maxStreak, we remove em
    //   } else if (item.streak <= minStreak) {
    //     minStreakHabit.push(item);
    //     minStreak = item.streak;

    //     // for-each loop through maxStreakHabit
    //     // if each streak is lower than maxStreak, we remove em
    //   }
    // });

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
        <button className="btn" onClick={cardReset}>
          Reset Day
        </button>
      </div>
      <div className="d-flex justify-content-center">{cardForm}</div>
      {view}
    </div>
  );
}
