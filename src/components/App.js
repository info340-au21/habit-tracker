import {CardList} from "./HomePage";
import {ProfileCard} from "./Profile";

export function App(props) {


    return (
        <div>
        <h1>Today's Habits</h1>
            <CardList />
            <ProfileCard />
          
        </div>
    )

}