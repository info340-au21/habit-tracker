import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import {
  getDatabase,
  ref,
  set as firebaseSet,
  push as firebasePush,
  onValue,
} from "firebase/database";

export function CardList(props) {
  let body = props.cardHistory.map((item, index) => (
    <Card
      key={index}
      info={item}
      remove={props.howToRemove}
      expand={props.singleDisplay}
      updateCount={props.updateCount}
    />
  ));
  return (
    <div>
      <div className="container mt-4">
        <div className="row">{body}</div>
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
  //for ARIA
  let s = "you have completed this habit " + card.completeCount + " times";
  return (
    <div className="d-flex m-5 ">
      <div className=" col-sm-2 col-md-2 col-lg-4"></div>
      <div id="expand-card" className="card col-sm-8 col-md-8 col-lg-4">
        <div className="card-body justify-content-center">
          <div className="expand-top">
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

export function AddCard(props) {
  const db = getDatabase(); // not the data; "mailing address"

  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [open, setOpen] = useState(false); //sets whether the 'add new habit' dropdown is open

  const handleTitleUpdate = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionUpdate = (event) => {
    setDescriptionValue(event.target.value);
  };

  // const handleClick = (event) => {
  //   if (titleValue !== "" && descriptionValue !== "") {
  //     console.log("submitting", titleValue);
  //     props.howToAddCard(titleValue, descriptionValue);
  //     setTitleValue("");
  //     setDescriptionValue("");
  //   } else {
  //     alert("You need to fill in BOTH fields.");
  //   }
  // };

  return (
    <>
      {/* Add Habit Form */}
      <Button
        variant="link"
        className="add-habit-form-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="add-habit-form-button"
        aria-label="add new habit"
      >
        New Habit
      </Button>
      <Collapse in={open}>
        <form>
          <div class="form-group">
            <label for="habit-title">Action</label>
            <input
              type="text"
              value={titleValue}
              onChange={handleTitleUpdate}
              class="form-control"
              id="habit-title"
              placeholder="Enter Action"
              aria-label="action input box"
            ></input>
          </div>
          <div class="form-group">
            <label for="habit-text">Implementation Intention</label>
            <input
              type="text"
              value={descriptionValue}
              onChange={handleDescriptionUpdate}
              class="form-control"
              id="habit-text"
              placeholder="I will [x] at [time] in/at [location]"
              aria-label="implmentation input box"
            ></input>
          </div>
          {/* Make sure that the habit can't be added if either field is empty */}
          {/* Check problem set 7 */}

          <Button
            variant="button"
            className="add-habit-button"
            onClick={handleClick}
            aria-controls="submit new habit"
          >
            Add New Habit
          </Button>
        </form>
      </Collapse>
    </>
  );
}

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
      setButtonName("");
    }
  };

  // let text = card.cardText;
  // let length = text.length;
  // if (length > 10) {
  //   text = text.substring(0, text.length - 3) + "...";
  // }
  return (
    <div className="d-flex col-md-6 col-xl-3" id={card.cardText} aria-label="card list">
      <div id={cardColor} className="card mb-4">
        <div className="card-body" aria-label="card">
          <div className="row">
            <div className="col-sm-auto col-xl-12"></div>

            <div className="col-sm">
              {/* <h2 className="card-title">{card.cardTitle}</h2> */}
              <p className="card-text">{card.cardText}</p>
              <p className="card-text">{text}</p>
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
            className=" btn btn-success m-2"
            id={card.cardText}
            onClick={makeGreen}
            aria-label={buttonName}
          >
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}