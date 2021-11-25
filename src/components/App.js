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
                <NavBar />
                <About />
            </div>

            <div>
                <NavBar />
                <ProfileCard />
            </div>
        </div>
       
    )

}