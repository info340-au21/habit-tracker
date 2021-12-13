
import React, {useState} from "react";
import CARD_DATA from "../data/cards.json";
import {CardList, AddCard, ExpandCard} from "./CardFunctions";


export function HomePage(props) {
    
    return (
        <div>
            <h1>Your Habbits</h1>
            <Cards />
        </div>

    )
}



export function Cards(props) {

    const [currentCards, setCurrentCards] = useState(CARD_DATA);

    const [cardExpand, setCardExpand] = useState([]);


    const addCard = (cardTitle, cardDescription) => {
        // update the database
        const newHabit = {
          cardTitle: cardTitle,
          cardText: cardDescription,
          timestamp: Date.now(),
          completeCount: 0,
        };
        //const habitRef = ref(db, "allHabits/" + currentUser.uid);
    
        const updatedArray = [...currentCards, newHabit];
        //setCurrentCards(updatedArray);
        //firebaseSet(habitRef, updatedArray);
        setCurrentCards(updatedArray);
    


    };


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
    
                }
            }
        })
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
            updateCount={updateCompletion}
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


      return view;
}