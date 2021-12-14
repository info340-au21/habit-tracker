import React, { useState } from "react";
import { Card } from "./Card";

export function CardList(props) {

  // pseudocode below --------------------------------
  // // const [currentStreak, setCurrentStreak] = useState(0);
  // streak = completeCount (from JSON)
  // // const [currentStreak, setCurrentStreak] = useState(0);

  // streak = streak (from JSON)

  // if (!habitIsDone && days > tempDays) {
  //   streak = 0;
  // } else {
  //   streak++;
  // }
  // // If you complete a habit:
  // // mark habit as complete
  // // set tempDay to current day
  // // update day (not tempDay)
  // // if (day > tempDay and habit is NOT done)
  // // reset completeCount to 0
  // // reset streak to 0

  // // for each habit
  // function setStreak() {
  //   habit.streak++;
  // }
  // function resetStreak() {
  //   habit.streak = 0;
  // }
  // if (habit.streak >= 5) {//shows up on stats page
  //   habitStreaks.add(habit);//this would be a set
  // }
  // -------------------------------------------------
  
 
  

  let notDone = props.cardHistory.map((item, index) => {
    if (!item.isGreen) {
      return (
        <Card
          key={index}
          info={item}
          remove={props.howToRemove}
          expand={props.singleDisplay}
          updateCount={props.updateCount}
          makeCardGreen={props.makeCardGreen}
          removeGreen={props.removeGreen}
          decCount={props.decCount}
        />
      );
    }
  });

  let done = props.cardHistory.map((item, index) => {
    if (item.isGreen) {
      return (
        <Card
          key={index}
          info={item}
          remove={props.howToRemove}
          expand={props.singleDisplay}
          updateCount={props.updateCount}
          makeCardGreen={props.makeCardGreen}
          removeGreen={props.removeGreen}
          decCount={props.decCount}
        />
      );
    }
  });

  return (
    <div>
      <div className="container ">
        <h2 className="mt-4">Remaining Habits:</h2>
        <div className="row">{notDone}</div>
        <h2 className="mt-4"> Completed Habits: </h2>
        <div className="row mb=4">{done}</div>
      </div>
    </div>
  );
}

export function ExpandCard(props) {
  let card = props.card[0];

  console.log(card);

  const handleDelete = (event) => {
    console.log(event.target.id);
    props.howToRevert();
    setTimeout(() => {
      props.howToRemove(event.target.id);
    }, 300);
  };
  let s = "you have completed this habit " + card.completeCount + " times";

  console.log(card.streak);
  return (
    <div className="d-flex m-5 ">
      <div className=" col-sm-2 col-md-2 col-lg-4"></div>
      <div id="expand-card" className="card col-sm-8 col-md-8 col-lg-4">
        <div className="card-body justify-content-center" aria-label="card">
          <div id="expand-top">
            <h1 className="card-title p-3 mb-4">{card.cardTitle}</h1>
            <p className=" h5 card-text text-center m-3 pb-3">
              {card.cardText}
            </p>
          </div>
          <p className="h5 card-text text-center pt-4" aria-label={s}>
            You've completed this habit <b>{card.completeCount} </b> times!
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button className=" btn btn-primary m-3" onClick={props.howToRevert} aria-label="go back">
            Go back
          </button>
          <button
            className=" btn btn-danger m-3"
            id={card.cardText}
            onClick={handleDelete}
            aria-label="delete habit"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="col-sm-2 col-md-2 col-lg-4"></div>
    </div>
  );
}
