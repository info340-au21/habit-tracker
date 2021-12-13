import React from "react";

export default function About() {
  return (
    <div>
      <div className="container justify-content-center">
        <div>
          <h1>How It Works</h1>
          <img
            src="img/atomichabits.jpg"
            alt="Front Cover of Atomic Habits by James Clear"
            style={{ width: "264px", height: "400px" }}
            className="text-align: center"
          />
          <p></p>
          <iframe
            src="https://www.youtube.com/embed/U_nzqnXWvSo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            alt="Front Cover of Atomic Habits by James Clear"
            className="d-flex justify-content-center"
            width="720"
            height="405"
          ></iframe>
          <p></p>
          <h2>The Inspiration</h2>
          <p>
            In hoping to help people improve their lives, we looked to a popular
            novel by the name of Atomic Habits. Written by James Clear, this
            book features evidence-based research on how to implement habits in
            one's life. It has a New York Times #1 bestseller and has sold over
            5 million copies worldwide.
          </p>

          <h2>Implentation Intentions</h2>
          <p>
            According to James Clear, people are two to three times more likely
            to follow through with an intended habit if they "make a specific
            plan for when, where, and how they are going to implement it." He
            refers to said type of plan as an "implentation intention."
          </p>
          <p>
            As he writes in his book: "By outlining a clear plan of action and
            clarifying exactly what you need to work on, you make the task
            simpler which means it requires less motivation to do. So when you
            wake up the next morning and find that your motivation has faded,
            you still might have enough to get started because the next step has
            already been outlined and is simple and clear."
          </p>
          <h2>Stick with it!</h2>
          <img
            src="img/habit_line.jpg"
            alt="The Habit Line Chart"
            style={{ width: "590px", height: "438px" }}
            className="text-align: center"
          />
          <p></p>
        </div>
      </div>
    </div>
  );
}
