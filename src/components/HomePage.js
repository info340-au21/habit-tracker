
import CARD_DATA from "../data/cards.json";
// import { timeStamp } from "console";

export function NavBar(props) {
    return (
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">habit-trackr.</a>
                </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
        </nav>
    );
}


export function CardList(props) {
    let body = CARD_DATA.map((item, index) => <Card key={index} info={item} />)

    return (
        <div>
            <div class="container">
                <div class="row">
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
    
    
        <div class="d-flex col-md-6 col-xl-3">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-auto col-xl-12">
                            <img src={card.cardImage} alt="A person waking up" class="pb-3" />
                        </div>
                        <div class="col-sm">
                            <h2 class="card-title">{card.cardTitle}</h2>
                            <p class="card-text">
                                {card.cardText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

