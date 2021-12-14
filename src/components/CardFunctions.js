import React, { useState } from "react";
import Card, { RecCard } from "./Card";

export function CardList(props) {
  let notDone = props.cardHistory.map((item, index) => {
    if (!item.isComplete) {
      return (
        <Card
          key={index}
          info={item}
          remove={props.howToRemove}
          expand={props.singleDisplay}
          updateCount={props.updateCount}
          makeCardComplete={props.makeCardComplete}
          removeComplete={props.removeComplete}
          decCount={props.decCount}
        />
      );
    }
  });

  let done = props.cardHistory.map((item, index) => {
    if (item.isComplete) {
      return (
        <Card
          key={index}
          info={item}
          remove={props.howToRemove}
          expand={props.singleDisplay}
          updateCount={props.updateCount}
          makeCardComplete={props.makeCardComplete}
          removeComplete={props.removeComplete}
          decCount={props.decCount}
        />
      );
    }
  });

  return (
    <div>
      <div className="container ">
        <h2 className="mt-4" aria-label="remaining habits">
          Remaining Habits:
        </h2>
        <div className="row">{notDone}</div>
        <h2 className="mt-4" aria-label="completed habits">
          {" "}
          Completed Habits:{" "}
        </h2>
        <div className="row mb=4">{done}</div>
      </div>
    </div>
  );
}

export function RecCardList(props) {
  let recHabits = props.recHabits.map((item, index) => {
    return <RecCard info={item} handleEvent={props.handleEvent} key={index} />;
  });

  return (
    <div>
      <div className="container">
        <div className="row" aria-label="recommended habits">
          {recHabits}
        </div>
      </div>
    </div>
  );
}

export function ExpandCard(props) {
  let card = props.card[0];

  const handleDelete = (event) => {
    props.howToRevert();
    setTimeout(() => {
      props.howToRemove(event.target.id);
    }, 300);
  };
  let s = "you have completed this habit " + card.streak + " times";
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
            Your streak is <strong>{card.streak} </strong>.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className=" btn btn-primary m-3"
            onClick={props.howToRevert}
            aria-label="go back"
          >
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
