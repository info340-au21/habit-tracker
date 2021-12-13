import React, {useState} from 'react';
import CARD_DATA from "../data/cards.json";
import {NavLink} from 'react-router-dom';


// import { timeStamp } from "console";

export function NavBar(props) {
    return (
        <nav id="navbar" className="navbar navbar-expand navbar-dark bg-dark">
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
    let body = props.cardHistory.map((item, index) => <Card key={index} 
                                                        info={item} 
                                                        remove={props.howToRemove} 
                                                        expand={props.singleDisplay} 
                                                        updateCount={props.updateCount}/>)
    return (
        <div>
          <div className="container mt-4">
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
        props.howToRevert()
        setTimeout(() => {props.howToRemove(event.target.id)}, 300)
        
        


    }


    



    return (
            <div className="d-flex m-5 ">
                <div className=" col-sm-2 col-md-2 col-lg-4"></div>
                <div id="expand-card" className="card col-sm-8 col-md-8 col-lg-4">
                    <div className="card-body justify-content-center">
                        <div id="expand-top">
                            <h1 className="card-title p-3 mb-4">
                                {card.cardTitle}
                            </h1>
                            <p className=" h5 card-text text-center m-3 pb-3">
                                {card.cardText}
                            </p>
                        </div>
                        <p className="h5 card-text text-center pt-4">
                            You've completed this habit <b>{card.completeCount} </b> times!
                        </p>
                        

                    </div>
                    <div className="d-flex justify-content-center">
                        <button className=" btn btn-primary m-3" onClick={props.howToRevert} >Go back</button>
                        <button className=" btn btn-danger m-3" id={card.cardText} onClick={handleDelete}>Delete</button>
                    </div>

                </div>
                <div className="col-sm-2 col-md-2 col-lg-4"></div>
            </div>


    )


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


    const [cardColor, setCardColor] = useState("card-basic-view");


    const [buttonName, setButtonName] = useState("Complete");


    const handleDelete = (event) => {
        console.log(event.target.id);
        props.remove(event.target.id);


    }


    const handleExpand = (event) => {
        
        props.expand(event.target.id);
    }

    const makeGreen = (event) => {
        if (buttonName == "Complete") {
            event.target.className = "btn btn-dark m-2"
            setCardColor("card-complete-view")
            setButtonName(" Revert ")
            props.updateCount(event.target.id);

        } else {
            event.target.className = "btn btn-success m-2"
            setCardColor("card-basic-view")
            setButtonName("Complete")
        }
        
    }
   
    
    return ( 
    
    
        <div className="d-flex col-md-6 col-xl-3" id={card.cardText}>
            <div id={cardColor} className="card mb-4" >
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
                    <button className=" btn btn-success m-2" id={card.cardText} onClick={makeGreen} >{buttonName}</button>
             
                </div>
            </div>
        </div>

    )
}

