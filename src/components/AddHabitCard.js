import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

export function AddCard(props) {
  const [titleValue, setTitleValue] = useState("");

  const [descriptionValue, setDescriptionValue] = useState("");

  const [open, setOpen] = useState(false); //sets whether the 'add new habit' dropdown is open

  const [displayAddHabit, setDisplayAddHabit] = useState(true);

  const [addHabitButtonText, setAddHabitButtonText] = useState('Add New Habit');

  const handleTitleUpdate = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionUpdate = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleClick = (event) => {
    if (titleValue !== '' && descriptionValue !== '') {
      event.preventDefault();
      props.howToAddCard(titleValue, descriptionValue);
      setTitleValue("");
      setDescriptionValue("");
    } else {
      alert("You need to fill in both fields.")
    }
  };

  const habitButtonHandler = (event) => {
    setOpen(!open);
    if (displayAddHabit) {
      setAddHabitButtonText('Cancel');
      setDisplayAddHabit(false);
    } else {
      setAddHabitButtonText('Add New Habit');
      setDisplayAddHabit(true);
    }
  };

  return (
    <>
      {/* Add Habit Form */}
      <Button
        variant="link"
        //className="add-habit-form-button"
        id="main-page-background"
        // onClick={() => setOpen(!open)}
        onClick={habitButtonHandler}
        aria-expanded={open}
        aria-controls="add-habit-form-button"
      >
        {/* <button
          id="add-task-button2"
          className="btn p-2 mt-2 justify-content-left"
        > */}
          {addHabitButtonText}
        {/* </button> */}
      </Button>
      <Collapse in={open}>
        <form>
          <div class="form-group">
            <label id="main-page-background" for="habit-title">
              {" "}
              <b>Action</b>{" "}
            </label>
            <input
              type="text"
              value={titleValue}
              onChange={handleTitleUpdate}
              class="form-control"
              id="habit-title"
              placeholder="Enter Action">
            </input>
          </div>
          <div class="form-group">
            <label className="mt-2" id="main-page-background" for="habit-text">
              {" "}
              <b> Implementation Intention </b>
            </label>
            <input
              type="text"
              value={descriptionValue}
              onChange={handleDescriptionUpdate}
              class="form-control"
              id="habit-text"
              placeholder="I will [x] at [time] in/at [location]">
            </input>
          </div>
          {/* DONE */}{/* Make sure that the habit can't be added if either field is empty */}
          {/* DONE */}{/* Check problem set 6. */}
          {/* DONE */}{/* Give feedback to user if fields are empty. */}
          {/* Center cards and their text on different screen sizes.*/}
          {/* Consistent card sizing.*/}

          <Button
            //variant="button"
            //className="add-habit-button"
            id="add-task-button"
            className="btn p-2 mt-2 justify-content-left"
            onClick={handleClick}>
            Submit
          </Button>
          <div className="d-none">
            Both fields must be filled in.
          </div>
        </form>
      </Collapse>
    </>
  );
}
