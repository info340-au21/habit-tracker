import React, {useState} from "react";
import {Button, Collapse} from 'react-bootstrap';





export function AddCard(props) {

    const [titleValue, setTitleValue] = useState('');

    const [descriptionValue, setDescriptionValue] = useState('');

    const [open, setOpen] = useState(false);//sets whether the 'add new habit' dropdown is open

    const handleTitleUpdate = (event) => {
        setTitleValue(event.target.value);

    }

    const handleDescriptionUpdate = (event) => {
        setDescriptionValue(event.target.value);
    }

    const handleClick = (event) => {
        if (titleValue !== "" && descriptionValue !== "") {
            console.log("submitting", titleValue);
            props.howToAddCard(titleValue, descriptionValue);
            setTitleValue('');
            setDescriptionValue('');
        } else {
            
        }
    }

    return (
        <>
            {/* Add Habit Form */}
            <Button
                variant="link"
                className="add-habit-form-button"
                
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="add-habit-form-button">
                Add New Habit
            </Button>
            <Collapse in={open}>
                <form>
                    <div class="form-group">
                        <label for="habit-title">Action</label>
                        <input type="text" 
                                value={titleValue} 
                                onChange={handleTitleUpdate}
                                class="form-control" 
                                id="habit-title" 
                                placeholder="Enter Action">
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="habit-text">Implementation Intention</label>
                        <input type="text" 
                                value={descriptionValue} 
                                onChange={handleDescriptionUpdate}
                                class="form-control" 
                                id="habit-text" 
                                placeholder="I will [x] at [time] in/at [location]">
                        </input>
                    </div>
                    {/* Make sure that the habit can't be added if either field is empty */}
                    {/* Check problem set 7 */}

                    <Button
                        variant="button"
                        className="add-habit-button"
                        onClick={handleClick}
                        aria-controls="habit-adder">
                        Add New Habit
                    </Button>
                </form>
            </Collapse>
        </>
    );
}
