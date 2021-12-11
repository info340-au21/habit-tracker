import React, {useState} from 'react';
import CARD_DATA from "../data/cards.json";


// import { timeStamp } from "console";

export function NavBar(props) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">habit-trackr.</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Profile</a></li>
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
    let body = props.cardHistory.map((item, index) => <Card key={index} info={item} />)
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


export function AddCard(props) {

    const [titleValue, setTitleValue] = useState('');

    const [descriptionValue, setDescriptionValue] = useState('');

    const handleTitleUpdate = (event) => {
        setTitleValue(event.target.value);

    }

    const handleDescriptionUpdate = (event) => {
        setDescriptionValue(event.target.value);
        
    }

    const handleClick = (event) => {
        console.log("submitting", titleValue);
        props.howToAddCard(titleValue, descriptionValue);
        setTitleValue('')
        setDescriptionValue('')
    }

    return (

        <div>

        <form>
            <div class="form-group">
                <label for="habit-title">Habit Title</label>
                <input type="text" 
                        value={titleValue} 
                        onChange={handleTitleUpdate}
                        class="form-control" 
                        id="habit-title" 
                        placeholder="Enter Title">
                </input>
            </div>
            <div class="form-group">
                <label for="habit-text">Habit Description</label>
                <input type="text" 
                        value={descriptionValue} 
                        onChange={handleDescriptionUpdate}
                        class="form-control" 
                        id="habit-text" 
                        placeholder="Enter Description">

                </input>
            </div>
            <div class="form-group">
                <label for="select-occurence">Select Recurrence</label>
                <select class="form-control" id="select-occurence">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                </select>
            </div>
            <div>
                <button type="button" 
                        className="btn btn-secondary" 
                        onClick={handleClick} 
                        disabled={titleValue == ""}>
                        Add
                </button>
            </div>
        </form>


        </div>


    );

}


export function Card(props) {

    // single JSON entry
    let card = props.info;
    
    return ( 
    
    
        <div className="d-flex col-md-6 col-xl-3">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            <img src={card.cardImage} alt={card.cardImageAlt} className="pb-3" />
                            <button className="float-right btn btn-outline-primary">Complete</button>
                        </div>
                        
                        <div className="col-sm">
                            <h2 className="card-title">{card.cardTitle}</h2>
                            <p className="card-text">
                                {card.cardText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

