import React, { useState } from "react";

export function Card(props) {
  // single JSON entry
  let card = props.info;

  //const [cardColor, setCardColor] = useState("card-basic-view");

  //const [buttonName, setButtonName] = useState("Complete");

  const handleDelete = (event) => {
    console.log(event.target.id);
    props.remove(event.target.id);
  };

  const handleExpand = (event) => {
    event.preventDefault();
    props.expand(event.target.id);
  };

  /*
  const makeGreen = (event) => {
    event.preventDefault();
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
  */

  let cardColor;
  let buttonName;
  let buttonClass;
  
  if (!card.isGreen) {
    cardColor="card-basic-view";
    buttonName = "Complete";
    buttonClass = "btn btn-success m-2"
  } else {
    cardColor="card-complete-view";
    buttonName = "Revert";
    buttonClass = "btn btn-dark m-2"
  }



  const makeGreen = (event) => {
    event.preventDefault();
    if (!card.isGreen) {
    

      props.updateCount(event.target.id);
      props.makeCardGreen(event.target.id);

    } else {

      props.removeGreen(event.target.id);

    }


  }

  return (
    <div className="d-flex col-md-6 col-xl-3" id={card.cardText}>
      <div id={cardColor} className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">

              <div className="col-sm">
                <h2 className="card-title">{card.cardTitle}</h2>
                <p className="card-text">{card.cardText}</p>
              </div>

            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-2">
          <button
            className=" btn btn-primary m-2"
            id={card.cardText}
            onClick={handleExpand}>
            Expand
          </button>
          <button
            className={buttonClass}
            id={card.cardText}
            onClick={makeGreen}>
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}