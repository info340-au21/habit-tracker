import React from 'react';
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
        <footer class="text-center text-lg-start bg-light text-muted">
            <div class="container">
                <p>&copy;Augene Pak, John Danielsson, Andrew Frazier, Luka Marceta</p>
                <p>Contact information: ajp824@uw.edu, frazia@uw.edu, lukamarc@uw.edu</p>
            </div>
        </footer>
    );
}


export function CardList(props) {
    let body = CARD_DATA.map((item, index) => <Card key={index} info={item} />)

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

