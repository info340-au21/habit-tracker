import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function Motivation() {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Add motivational quote"
          aria-label="Text box for motivational quote"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Submit
        </Button>
      </InputGroup>
    </div>
  );
}
