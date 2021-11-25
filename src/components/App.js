import React from 'react';
import {NavBar, CardList} from "./HomePage";
import {About} from "./About";
import {ProfileCard} from "./Profile";

export function App(props) {
    return (
        <div>
            <div>
                <NavBar />
                <CardList />
            </div>


            <div>
                <hr/>
                <h1>About the page</h1>
                <About />
            </div>

            <div>
                <hr/>
                <h1>Profile</h1>
                <ProfileCard />
            </div>
        </div>
       
    )

}