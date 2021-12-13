import React, { useState } from "react";

export function Card(props) {
  // single JSON entry
  let card = props.info;

  const [cardColor, setCardColor] = useState("card-basic-view");

  const [buttonName, setButtonName] = useState("Complete");

  const handleDelete = (event) => {
    console.log(event.target.id);
    props.remove(event.target.id);
  };

  const handleExpand = (event) => {
    props.expand(event.target.id);
  };

  const makeGreen = (event) => {
    if (buttonName == "Complete") {
      event.target.className = "btn btn-dark m-2";
      setCardColor("card-complete-view");
      setButtonName(" Revert ");
      props.updateCount(event.target.id);
    } else {
      event.target.className = "btn btn-success m-2";
      setCardColor("card-basic-view");
      setButtonName("Complete");
    }
  };

  return (
    <div className="d-flex col-md-6 col-xl-3" id={card.cardText}>
      <div id={cardColor} className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12"></div>

            <div className="col-sm">
              <h2 className="card-title">{card.cardTitle}</h2>
              <p className="card-text">{card.cardText}</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-2">
          <button
            className=" btn btn-primary m-2"
            id={card.cardText}
            onClick={handleExpand}
          >
            Expand
          </button>
          <button
            className=" btn btn-success m-2"
            id={card.cardText}
            onClick={makeGreen}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}
