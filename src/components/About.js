import React from "react";
{
  /* Remove the <br>s. */
}

function About() {
  return (
    <div>
      <div className="container justify-content-center">
        <div>
          <h1>
            The 4 parts of a Habit are the Cue, Craving, Response, and Reward.
          </h1>
          <h2>Cue</h2>
          <p>
            The Cue is what makes you think of doing the Habit. It's a piece of
            information that predicts a reward. For example, if your stomach
            rumbles, you may think about eating food.
          </p>
          <h2>Craving</h2>
          <p>
            The Craving is what you fundamentally desire. It's not always
            obvious. You don't want to go on Netflix, you want to be
            entertained. You don't want to brush and floss your teeth, you want
            the feeling of a clean mouth. You don't want to exercise, you want
            the feeling of more energy and attraction from the opposite sex.
          </p>
          <h2>Response</h2>
          <p>
            The response is simply the physical action associated with the
            habit. brushing and flossing, calling a friend every month, lifting
            weights, or reading 10 pages of a self-improvement book every day.
          </p>
          <h2>Reward</h2>
          <p>
            The reward is the satiation of the desire (craving). When you brush
            and floss your teeth, you are rewarded with the feeling of a clean
            mouth. Similarly, when you finish lifting weights, you are rewarded
            with the feeling of more energy and the satisfaction of having a
            better looking body.
          </p>
        </div>

        <div>
          <h1>
            We use 4 metrics when evaluating a Habit: Direction, Impact, Total
            Impact, and Frequency.
          </h1>

          <h2>Direction</h2>
          <p>
            Direction measures whether a habit is good (1), neutral (0), or bad
            (-1).
          </p>

          <h2>Impact</h2>
          <p>
            Impact measures, on a scale of 0 to 10, how much of the day is
            impacted by performing the habit. The scoring guidelines are as
            follows: 0 = negligible impact or no impact, 5 = up to half the day
            is impacted, 10 = the whole day is impacted. For any value X above
            10, divide X by 10 to get the number of days impacted by the habit.
          </p>

          <h2>Total Impact</h2>
          <p>
            Total Impact measures the total effect of a Habit based on its
            Impact score, whether that is negative, neutral, or positive.
          </p>

          <h2>Frequency</h2>
          <p>
            Frequency measures how often a Habit is being done. The values are:
            y = yes (done 75% of the time it should be done), s = sometimes, and
            n = no (done 25% or less than how often it should be done).
          </p>

          <h2>Examples</h2>

          <h3>Example 1:</h3>
          <p>Habit = "Lift weights every day."</p>
          <p>Direction = 1</p>
          <p>Impact = 10</p>
          <p>Total Impact = 1 x 10 = 10</p>
          <p>Frequency = y</p>

          <h3>Example 2:</h3>
          <p>Habit = "Eating to alleviate boredom."</p>
          <p>Direction = -1</p>
          <p>Impact = 7</p>
          <p>Total Impact = 1 x -7 = -7</p>
          <p>Frequency = s</p>
        </div>

        {/* <div>

                <h1>Data is Powerful</h1>
                <p>
                    Keeping track of habits is a powerful tool for reinforcing them.
                    Each of the Metrics (Direction, Impact, Total Impact, and Frequency) are used to inform you of which
                    habits to focus on maintaining or cutting.
                </p>

                <h2>Advanced Metrics</h2>

                <h3>Frequency-Adjusted Percentages of Habit Types</h3>
                <p>Habits that are good and done consistently</p>
                <p>Habits that are good and done sometimes</p>
                <p>Habits that are good and done infrequently or never</p>
                <p>Habits that are bad and done consistently</p>
                <p>Habits that are bad and done sometimes</p>
                <p>Habits that are bad and done infrequently or never</p>

                <h3>Impact-Adjusted Percentages of Habit Types</h3>
                <p>Habits that are good and high impact</p>
                <p>Habits that are good and medium impact</p>
                <p>Habits that are good and low impact</p>
                <p>Habits that are bad and high impact</p>
                <p>Habits that are bad and medium impact</p>
                <p>Habits that are bad and low impact</p>
                <p>
                    <em>High Impact: 8 or higher, Medium Impact: between 4 and 7 (inclusive), Low Impact: less than 4</em>
                </p>

            </div> */}
      </div>
    </div>
  );
}

export default About;
