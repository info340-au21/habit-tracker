
import CARD_DATA from "../data/cards.json";
// import { timeStamp } from "console";


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
    let cardInfo = props.item;
    
    return ( 
    
    
        <div class="d-flex col-md-6 col-xl-3">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-auto col-xl-12">
                            <img src="img/wake-up.jpg" alt="A person waking up" class="pb-3" />
                        </div>
                        <div class="col-sm">
                            <h2 class="card-title">{cardInfo.CardTitle} <strong>(+)</strong></h2>
                            <p class="card-text">
                                {cardInfo.CardText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

