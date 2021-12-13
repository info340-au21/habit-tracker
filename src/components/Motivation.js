import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function Motivation() {
  //   const [titleValue, setTitleValue] = useState("");

  //   const [descriptionValue, setDescriptionValue] = useState("");

  //   const [open, setOpen] = useState(false); //sets whether the 'add new habit' dropdown is open

  //   const handleTitleUpdate = (event) => {
  //     setTitleValue(event.target.value);
  //   };

  //   const handleDescriptionUpdate = (event) => {
  //     setDescriptionValue(event.target.value);
  //   };

  //   const handleClick = (event) => {
  //     if (titleValue !== "" && descriptionValue !== "") {
  //       console.log("submitting", titleValue);
  //       props.howToAddCard(titleValue, descriptionValue);
  //       setTitleValue("");
  //       setDescriptionValue("");
  //     } else {
  //     }
  //   };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add motivational quote"
          aria-label="Text box for motivational quote"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </div>
  );
}
