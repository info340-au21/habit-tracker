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
        event.preventDefault();
      
        
        props.howToAddCard(titleValue, descriptionValue);
        setTitleValue('');
        setDescriptionValue('');

        
       
            
        
    }

    return (
        <>
            {/* Add Habit Form */}
            <Button
                variant="link"
                //className="add-habit-form-button"
                id="main-page-background"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="add-habit-form-button">
               <b> Add New Habit </b>
            </Button>
            <Collapse in={open}>
                <form>
                    <div class="form-group" >
                        <label id="main-page-background" for="habit-title"> <b>Action</b> </label>
                        <input  type="text" 
                                
                                value={titleValue} 
                                onChange={handleTitleUpdate}
                                class="form-control" 
                                id="habit-title" 
                                placeholder="Enter Action">
                        </input>
                    </div>
                    <div class="form-group">
                        <label className="mt-2" id="main-page-background" for="habit-text"> <b> Implementation Intention </b></label>
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

                    <button
                        //variant="button"
                        //className="add-habit-button"
                        id="add-task-button"
                        className="btn p-2 mt-2 justify-content-left"
                        onClick={handleClick}>
                        Add New Habit
                    </button>
                </form>
            </Collapse>
        </>
    );
}
