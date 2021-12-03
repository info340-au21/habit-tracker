import React, {useState} from 'react';
import {NavBar, CardList, AddCard} from "./HomePage";
import {About} from "./About";
import {ProfileCard} from "./Profile";
import CARD_DATA from "../data/cards.json";

export function App(props) {
    

    const [currentCards, setCurrentCards] = useState(CARD_DATA)
    
    const addCard = (cardInfo) => {
        const newCard = {
            cardTitle: cardInfo,
            cardText: "Blah",
            cardImage: "img/wake-up.jpg",
            cardImageAlt: "Person waking up"
        }

        const updatedArray = [...currentCards, newCard];
        setCurrentCards(updatedArray);
    }
    
    return (

        <div>
            <div>
                <NavBar />
                <CardList cardHistory={currentCards} />
                <AddCard howToAddCard={addCard} />
            </div>

            <div>
                <NavBar />
                <About />
            </div>

            <div>
                <NavBar />
                <ProfileCard />
            </div>
        </div>
       
    )

}
