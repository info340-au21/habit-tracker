import React, {useState} from 'react';
import CARD_DATA from "../data/cards.json";
import {NavLink} from 'react-router-dom';
import {Button, Collapse} from 'react-bootstrap';


// import { timeStamp } from "console";

export function NavBar(props) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">habit-trackr.</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><NavLink exact to="/" activeClassName="activeLink">Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="activeLink">About</NavLink></li>
                    <li><NavLink exact to="/profile" activeClassName="activeLink">Profile</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export function Footer(props) {
    return (
        <footer className="page-footer font-small bg-dark pt-4">
            <div className="container">
                <p>&copy;Augene Pak, John Danielsson, Andrew Frazier, Luka Marceta</p>
                <p>Contact information: ajp824@uw.edu, frazia@uw.edu, lukamarc@uw.edu, johnaugustd@gmail.com</p>
            </div>
        </footer>
    );
}

export function CardList(props) {
    let body = props.cardHistory.map((item, index) => <Card key={index} info={item} remove={props.howToRemove} expand={props.singleDisplay}/>)
    return (
        <div>
          <div className="container">
                <div className="row">
                    {body}
                </div>
            </div> 
        </div>

    );
}


export function ExpandCard(props) {

    let card = props.card[0];

    console.log(card);


    const handleDelete = (event) => {
        console.log(event.target.id);
        props.howToRemove(event.target.id);
        props.howToRevert()


    }

    return (
            <div className="d-flex m-3 ">
                <div className=" col-sm-2 col-md-2 col-lg-3"></div>
                <div className="card col-sm-8 col-md-8 col-lg-6">
                    <div className="card-body justify-content-center m-5">
                        <h2 className="card-title">
                            {card.cardTitle}
                        </h2>
                        <p className="card-text">
                            {card.cardText}
                        </p>
                        <p>Sanity check</p>

                    </div>
                    <div className="d-flex justify-content-center">
                        <button className=" btn btn-primary m-3" onClick={props.howToRevert} >Go back</button>
                        <button className=" btn btn-danger m-3" id={card.cardText} onClick={handleDelete}>Delete</button>
                    </div>

                </div>
                <div className="col-sm-2 col-md-2 col-lg-3"></div>
            </div>


    )


}


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
        console.log("submitting", titleValue);
        props.howToAddCard(titleValue, descriptionValue);
        setTitleValue('');
        setDescriptionValue('');
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
                New Habit
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




export function Card(props) {

    // single JSON entry
    let card = props.info;

    const handleDelete = (event) => {
        console.log(event.target.id);
        props.remove(event.target.id);
    }


    const handleExpand = (event) => {
        props.expand(event.target.id);
    }
   
    
    return ( 
    
    
        <div className="d-flex col-md-6 col-xl-3">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            
                            
                        </div>
                        
                        <div className="col-sm">
                            <h2 className="card-title">{card.cardTitle}</h2>
                            <p className="card-text">
                                {card.cardText}
                            </p>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className="d-flex justify-content-center m-2">
                    <button className=" btn btn-primary m-2" id={card.cardText} onClick={handleExpand} >Expand</button>
             
                </div>
            </div>
        </div>

    )
}

