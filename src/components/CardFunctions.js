import React, { useState } from "react";
import { Card } from "./Card";

export function CardList(props) {
  
 
  
  let notDone = props.cardHistory.map((item, index) => {
    
  
    if (!item.isGreen) {
    return (<Card
      key={index}
      info={item}
      remove={props.howToRemove}
      expand={props.singleDisplay}
      updateCount={props.updateCount}
      makeCardGreen={props.makeCardGreen}
      removeGreen = {props.removeGreen}

    />)
    }
  }
  );

  let done = props.cardHistory.map((item, index) => {

  
    if (item.isGreen) {
    return (<Card
      key={index}
      info={item}
      remove={props.howToRemove}
      expand={props.singleDisplay}
      updateCount={props.updateCount}
      makeCardGreen={props.makeCardGreen}
      removeGreen = {props.removeGreen}

    />)
    }
  }
  );


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

  return (
    <div className="d-flex m-5 ">
      <div className=" col-sm-2 col-md-2 col-lg-4"></div>
      <div id="expand-card" className="card col-sm-8 col-md-8 col-lg-4">
        <div className="card-body justify-content-center">
          <div id="expand-top">
            <h1 className="card-title p-3 mb-4">{card.cardTitle}</h1>
            <p className=" h5 card-text text-center m-3 pb-3">
              {card.cardText}
            </p>
          </div>
          <p className="h5 card-text text-center pt-4">
            You've completed this habit <b>{card.completeCount} </b> times!
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button className=" btn btn-primary m-3" onClick={props.howToRevert}>
            Go back
          </button>
          <button
            className=" btn btn-danger m-3"
            id={card.cardText}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="col-sm-2 col-md-2 col-lg-4"></div>
    </div>
  );
}
