import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

export function AddCard(props) {
  // action
  const [titleValue, setTitleValue] = useState("");
  // implementation intention
  const [descriptionValue, setDescriptionValue] = useState("");
  //sets whether the 'add new habit' dropdown is open
  const [open, setOpen] = useState(false); 
  //sets whether to have the 'add habit' button say 'Add New Habit' or 'Cancel'
  const [displayAddHabit, setDisplayAddHabit] = useState(true);
  //sets add button text
  const [addHabitButtonText, setAddHabitButtonText] = useState("Add New Habit");

  const handleTitleUpdate = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionUpdate = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleClick = (event) => {
    if (titleValue !== "" && descriptionValue !== "") {
      event.preventDefault();
      props.howToAddCard(titleValue, descriptionValue);
      setTitleValue("");
      setDescriptionValue("");
    } else {
      alert("You need to fill in BOTH fields.");
    }
  };

  // changes the 'add habit' button's text depending on whether a new habit IS being added or not
  const habitButtonHandler = () => {
    setOpen(!open);
    if (displayAddHabit) {
      setAddHabitButtonText("Cancel");
      setDisplayAddHabit(false);
    } else {
      setAddHabitButtonText("Add New Habit");
      setDisplayAddHabit(true);
    }
  };

  return (
    <div>
      {/* Add Habit Form */}
      <Button
        variant="link"
        id="main-page-background"
        onClick={habitButtonHandler}
        aria-expanded={open}
        aria-controls="add-habit-form-button"
        aria-label="add habit form button">
        {addHabitButtonText}
      </Button>
      <Collapse in={open}>
        <form>
          <div className="form-group">
            <label id="main-page-background" htmlFor="habit-title">
              {" "}
              <b>Action</b>{" "}
            </label>
            <input
              type="text"
              value={titleValue}
              onChange={handleTitleUpdate}
              className="form-control"
              id="habit-title"
              placeholder="Enter Action">
            </input>
          </div>
          <div className="form-group">
            <label
              className="mt-2"
              id="main-page-background"
              htmlFor="habit-text"
            >
              {" "}
              <b> Implementation Intention </b>
            </label>
            <input
              type="text"
              value={descriptionValue}
              onChange={handleDescriptionUpdate}
              className="form-control"
              id="habit-text"
              placeholder="I will [x] at [time] in/at [location]"
              required>
            </input>
          </div>
          {/* Keep the first 2 commented-out things below just in case. */}
          {/* {!hasBeenClicked && descriptionValue === '' && <p className="alert alert-warning">Must provide a value</p>} */}
          {/* {descriptionValue === '' && <p className="alert alert-warning">Must provide a value</p>} */}

          <Button
            //variant="button"
            id="add-task-button"
            className="btn p-2 mt-2 justify-content-left"
            onClick={handleClick}
            aria-label="submit habit button">
            Submit
          </Button>
          <div className="d-none">Both fields must be filled in.</div>
        </form>
      </Collapse>
    </div>
  );
}