import React, { useState } from "react";

export default function Card(props) {
  // single JSON entry
  let card = props.info;
  const handleDelete = (event) => {
    console.log(event.target.id);
    props.remove(event.target.id);
  };

  const handleExpand = (event) => {
    event.preventDefault();
    props.expand(event.target.id);
  };

  let cardColor;
  let buttonName;
  let buttonClass;

  if (!card.isComplete) {
    cardColor = "card-basic-view";
    buttonName = "Complete";
    buttonClass = "btn btn-success m-2";
  } else {
    cardColor = "card-complete-view";
    buttonName = "Undo";
    buttonClass = "btn btn-dark m-2";
  }

  const makeComplete = (event) => {
    event.preventDefault();
    if (!card.isComplete) {
      props.updateCount(event.target.id);
      props.makeCardComplete(event.target.id);
    } else {
      props.decCount(event.target.id);
      props.removeComplete(event.target.id);
    }
  };

  let text = card.cardText;
  let length = text.length;
  if (length > 40) {
    text = text.substring(0, 37) + "...";
  }
// If there are 0 habits and you click "reset", you get an error. Handle this event!
  return (
    <div className="d-flex col-md-6 col-xl-3" id={card.cardText}>
      <div id={cardColor} className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <div className="col-sm" role="habit card">
                <h2 className="card-title">{card.cardTitle}</h2>
                <p className="card-text" role="paragraph">{text}</p>
                {/* <p className="card-text">{card.cardText}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-2">
          <button
            className=" btn btn-primary m-2"
            id={card.cardText}
            onClick={handleExpand}
            aria-label="expand habit"
          >
            Expand
          </button>

          <button
            className={buttonClass}
            id={card.cardText}
            onClick={makeComplete}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}

export function RecCard(props) {
  let card = props.info;
  const handleAdd = (event) => {
    event.preventDefault();
    props.handleEvent(event.target.id);
  };
  // let text = card.cardText;
  // let length = text.length;
  // if (length > 10) {
  //   text = text.substring(0, 10) + "...";
  // }
  return (
    <div className="d-flex col-md-6 col-xl-3" id={card.cardText}>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <div className="col-sm" role="habit card">
                <h2 className="card-title">{card.cardTitle}</h2>
                {/* <p className="card-text" role="paragraph">{text}</p> */}
                <p className="card-text">{card.cardTitle}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-2">
          <button
            className=" btn btn-primary m-2"
            id={card.cardText}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
