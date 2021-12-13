import React, { useState } from "react";
import { CardList, ExpandCard } from "./CardFunctions";
import { AddCard } from "./AddHabitCard";
import CARD_DATA from "../data/cards.json";

export function Cards(props) {
  const [currentCards, setCurrentCards] = useState(CARD_DATA);

  const [cardExpand, setCardExpand] = useState([]);

  const updateCompletion = (cardDescription) => {
    let updatedCards = currentCards.map((item, index) => {
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
    setCurrentCards(updatedCards);
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

  const addCard = (cardTitle, cardDescription) => {
    console.log("GHFI:SH:SFLKJS");
    // update the database
    const newHabit = {
      cardTitle: cardTitle,
      cardText: cardDescription,
      cardImage: "",
      cardImageAlt: "",
      impact: "=",
      completeCount: 0,
    };

    const updatedArray = [...currentCards, newHabit];
    //setCurrentCards(updatedArray);
    //firebaseSet(habitRef, updatedArray);
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
