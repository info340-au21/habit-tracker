import React, {useState} from 'react';
import {NavBar, CardList, AddCard} from "./HomePage";
import {About} from "./About";
import {ProfileCard} from "./Profile";
import CARD_DATA from "../data/cards.json";
import {Table} from "./MaterialTable";
import Basic from "./CheckCalendar";

export function App(props) {
    
                
    const [currentCards, setCurrentCards] = useState(CARD_DATA);

    const [cardExpand, setCardExpand] = useState([]);
    
    const addCard = (cardTitle, cardDescription) => {
        const newCard = {
            cardTitle: cardTitle,
            cardText: cardDescription,
            cardImage: "img/wake-up.jpg",
            cardImageAlt: "Person waking up"
        }

        const updatedArray = [...currentCards, newCard];
        setCurrentCards(updatedArray);
    }


    const removeCard = (cardDescription) => {
        let removalIndex = -1

        let updatedArray = currentCards.map((item, index) => {   
            if (item.cardText != cardDescription) {
                return item;
            } else {
                removalIndex = index;
                return;
            }
        });

  
        updatedArray.splice(removalIndex, 1);
        setCurrentCards(updatedArray);
    }


    const displaySingleCard = (cardDescription) => {
        let displayIndex = -1

        let updatedArray = currentCards.map((item, index) => {   
            if (item.cardText != cardDescription) {
                return item;
            } else {
                displayIndex = index;
                return;
            }
        });

        let focus = currentCards[displayIndex];
        let res = [{
            "cardTitle": focus.cardTitle,
            "cardText": focus.cardText,
            "cardImage": focus.cardImage,
            "cardImageAlt": focus.cardImageAlt,
            "impact": focus.impact
        }];

        setCardExpand(res);
    }


    // render homepage based on expansion
    let view;
    if (cardExpand.length == 0) {
        view =  [<CardList cardHistory={currentCards} howToRemove={removeCard} singleDisplay={displaySingleCard} key={1}/>,
                 <AddCard howToAddCard={addCard} key={2} />
        ] 
    } else {
        view = [<CardList cardHistory={cardExpand} howToRemove={removeCard} singleDisplay={displaySingleCard} key={1} />]
    }
    
    return (

        <div>
            <div>
                <NavBar />
                {view}
                
               
            </div>

            <div>
                <NavBar />
                <About />
            </div>

            <div>
                <NavBar />
                <ProfileCard />
                
                <Table></Table>
                <Basic></Basic>
            </div>
        </div>
       
    )

}
