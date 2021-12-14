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
    const updatedArray = currentCards.map((item) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          impact: item.impact,
          completeCount: item.completeCount + 1,
          isGreen: item.isGreen
        };
      }
    });



    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

  const makeCardGreen = (cardDescription) => {
    console.log("hhheerrree")
    const updatedArray = currentCards.map((item) => {
      if (item.cardText !== cardDescription) {
        return item;
      } else {
        
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          impact: item.impact,
          completeCount: item.completeCount + 1,
          isGreen: true
        };
      }
      
    });
    firebaseSet(habitRef, updatedArray) //change the database
      .catch((err) => {});
    setCurrentCards(updatedArray);
  };

    const removeGreen = (cardDescription) => {
      const updatedArray = currentCards.map((item) => {
        if (item.cardText !== cardDescription) {
          return item;
        } else {
          
          return {
            cardTitle: item.cardTitle,
            cardText: item.cardText,
            impact: item.impact,
            completeCount: item.completeCount,
            isGreen: false
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
      completeCount: 0,
      isGreen: false
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
        completeCount: focus.completeCount,
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
      
        return {
          cardTitle: item.cardTitle,
          cardText: item.cardText,
          impact: item.impact,
          completeCount: item.completeCount,
          isGreen: false
        };
      
    });
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
        howToRemove={removeCard}
        singleDisplay={displaySingleCard}
        updateCount={updateCompletion}
        makeCardGreen={makeCardGreen}
        removeGreen = {removeGreen}
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
        <button className="btn" onClick={cardReset}>Reset Day</button>
      </div>
      <div className="d-flex justify-content-center">
     
        {cardForm}
      </div>
      {view}
    </div>
  );
}
