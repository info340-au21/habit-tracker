import React, { useState, useEffect } from "react";
import { RecCardList } from "./CardFunctions";

import {
  getDatabase,
  ref,
  set as firebaseSet,
  onValue,
} from "firebase/database";

export default function Recommend(props) {
  const [recs, setRecs] = useState([]);
  const [habits, setHabits] = useState([]);
  const db = getDatabase();
  const recommendRef = ref(db, "recommend");
  const habitRef = ref(db, "habits/" + props.user.uid);

  useEffect(() => {
    //function when component first loads
    //addEventListener('databaseValueChange', () => {})
    const offFunction = onValue(recommendRef, (snapshot) => {
      const recommendations = snapshot.val(); //extract the value from the snapshot
      if (recommendations == null) {
        setRecs([]);
      } else {
        setRecs(recommendations);
      }
    });

    //instructions on how to leave will be called by React when component unmounts
    function cleanup() {
      offFunction(); //turn the listener off
    }
    return cleanup; //leave the instructions behind
  }, [db]); //when to re-run (never)

  useEffect(() => {
    //function when component first loads
    //addEventListener('databaseValueChange', () => {})
    const offFunction = onValue(habitRef, (snapshot) => {
      const allHabits = snapshot.val(); //extract the value from the snapshot
      if (allHabits == null) {
        setHabits([]);
      } else {
        setHabits(allHabits);
      }
    });

    //instructions on how to leave will be called by React when component unmounts
    function cleanup() {
      offFunction(); //turn the listener off
    }
    return cleanup; //leave the instructions behind
  }, [db]); //when to re-run (never)

  const handleClick = (cardTitle, cardDescription) => {
    const newHabit = {
      cardTitle: cardTitle,
      cardText: cardDescription,
      impact: "=",
      streak: 0,
      isComplete: false,
    };

    let removalIndex = -1;
    const updatedRecs = recs.map((item, index) => {
      if (item.cardTitle !== cardTitle) {
        return item;
      } else {
        removalIndex = index;
        return;
      }
    });
    updatedRecs.splice(removalIndex, 1);
    setRecs(updatedRecs);

    const updatedHabits = [...habits, newHabit];
    firebaseSet(habitRef, updatedHabits).catch((err) => {});
    setHabits(updatedHabits);
  };

  return (
    <div>
      <h1>Add Other's Habits</h1>
      <div className="d-flex justify-content-center">
        <RecCardList recHabits={recs} handleEvent={handleClick} key={1} />
      </div>
    </div>
  );
}
