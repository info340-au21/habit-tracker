import React, { useState, useEffect } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import MOTIVATION_DATA from "../data/motivation.json";
import {
  getDatabase,
  ref,
  set as firebaseSet,
  push as firebasePush,
  onValue,
} from "firebase/database";

export function MotivationFeed(props) {

  const [currentQuotes, setCurrentQuotes] = useState(MOTIVATION_DATA);




  const addQuote = (quoteText) => {
    const newQ = {
      userID: "gaisjdgasglkslhgawklhawrh",
      displayName: "Augene Pak",
      quote: quoteText

    }

    const updatedArray = [newQ, ...currentQuotes];

    setCurrentQuotes(updatedArray);

  }

  let feed = currentQuotes.map((item) => {

    return (<div className="m-3">
            {item.quote}
           </div>)

  });



  let form = <QuoteForm addQuote={addQuote}/>

  return (
    <div>
      <div>
        {form}
      </div>
      <div>
        {feed}
      </div>
    </div>
  )


}



export function QuoteForm(props) {
  // const [motiv, setMotiv] = useState(null);
  // let user = props.user;
  // const db = getDatabase();
  // const motivRef = ref(db, "motivation");

  // // code from lecture demo
  // useEffect(() => {
  //   //function when component first loads
  //   //addEventListener('databaseValueChange', () => {})
  //   const offFunction = onValue(motivRef, (snapshot) => {
  //     const motivation = snapshot.val(); //extract the value from the snapshot
  //     if (motivation == null) {
  //       setMotiv([]);
  //     } else {
  //       setMotiv(motivation);
  //     }
  //   });

  //   //instructions on how to leave will be called by React when component unmounts
  //   function cleanup() {
  //     offFunction(); //turn the listener off
  //   }
  //   return cleanup; //leave the instructions behind
  // }, [db]); //when to re-run (never)

  // const addMotivation = (user, quote) => {
  //   // update the database
  //   const newMotiv = {
  //     name: user.displayName,
  //     quote: quote,
  //   };

  //   //handle errors in firebase
  //   const updatedArray = [...motiv, newMotiv];
  //   //setCurrentCards(updatedArray);
  //   //firebaseSet(habitRef, updatedArray);
  //   firebaseSet(motivRef, updatedArray) //change the database
  //     .catch((err) => {});
  //   setMotiv(updatedArray);
  // };

  const [descriptionValue, setDescriptionValue] = useState("");


  const handleChange = (event) => {
    setDescriptionValue(event.target.value);
  }

  const addQuote = (event) => {
    event.preventDefault();
    props.addQuote(descriptionValue);

  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add motivational quote"
          aria-label="Text box for motivational quote"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={addQuote}>
          Submit
        </Button>
      </InputGroup>
    </div>
  );
}
