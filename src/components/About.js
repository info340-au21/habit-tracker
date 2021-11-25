export function About(props) {
    return (
        <div className="container justify-content-center">
            <button type="button" className="collapsible">The 4 Parts of a Habit</button>
            <div className="row-about">
                <p>The 4 parts of a Habit are the Cue, Craving, Response, and Reward.</p>
                <ol>
                    <li>Cue</li>
                    <p>
                        The Cue is what makes you think of doing the Habit. It's a piece of information
                        that predicts a reward. For example, if your stomach rumbles, you may think
                        about eating food.
                    </p>
                    <li>Craving</li>
                    <p>
                        The Craving is what you fundamentally desire. It's not always obvious.
                        You don't want to go on Netflix, you want to be entertained. You don't want to brush and
                        floss your teeth, you want the feeling of a clean mouth. You don't want to exercise,
                        you want the feeling of more energy and attraction from the opposite sex.
                    </p>
                    <li>Response</li>
                    <p>
                        The response is simply the physical action associated with the habit. Brushing and flossing,
                        calling a friend every month, lifting weights, or reading 10 pages of a self-improvement book
                        every day.
                    </p>
                    <li>Reward</li>
                    <p>
                        The reward is the satiation of the desire (craving). When you brush and floss your teeth, you
                        are rewarded with the feeling of a clean mouth. Similarly, when you finish lifting weights,
                        you are rewarded with the feeling of more energy and the satisfaction of having a better looking body.
                    </p>
                </ol>
            </div>
        
            <button type="button" className="collapsible">How To Measure Habits</button>
            <div className="row-about">

                <p>We use 4 metrics when evaluating a Habit: Direction, Impact, Total Impact, and Frequency.</p>

                <h2>Direction</h2>
                <p>
                    Direction measures whether a habit is good (1), neutral (0), or bad (-1).
                </p>

                <h2>Impact</h2>
                <p>
                    Impact measures, on a scale of 0 to 10, how much of the day is impacted by performing the
                    habit. The scoring guidelines are as follows: 0 = negligible impact or no impact, 5 = up
                    to half the day is impacted, 10 = the whole day is impacted. For any value X above 10,
                    divide X by 10 to get the number of days impacted by the habit.
                </p>

                <h2>Total Impact</h2>
                <p>
                    Total Impact measures the total effect of a Habit based on its Impact score, whether that is negative, neutral,
                    or positive.
                </p>

                <h2>Frequency</h2>
                <p>
                    Frequency measures how often a Habit is being done. The values are: y = yes (done 75%
                    of the time it should be done), s = sometimes, and n = no (done 25% or less than how often it
                    should be done).
                </p>

                <h2>Examples</h2>

                <p>
                    Example 1:<br>
                    Habit = "Lift weights every day."<br>
                    Direction = 1<br>
                    Impact = 10<br>
                    Total Impact = 1 x 10 = 10<br>
                    Frequency = y<br>
                </p>
                <p>
                    Example 2:<br>
                    Habit = "Eating to alleviate boredom."<br>
                    Direction = -1<br>
                    Impact = 7<br>
                    Total Impact = 1 x -7 = -7<br>
                    Frequency = s<br>
                </p>

            </div>

            <button type="button" className="collapsible">How To Use Habit Metrics</button>
            <div className="row-about">

                <h2>Data is Powerful</h2>
                <p>
                    Keeping track of habits is a powerful tool for reinforcing them.
                    Each of the Metrics (Direction, Impact, Total Impact, and Frequency) are used to inform you of which
                    habits to focus on maintaining or cutting.
                </p>

                <h2>Advanced Metrics</h2>
                <p>
                    Frequency-Adjusted Percentages of Habit Types<br>
                    Habits that are good & done consistently<br>
                    Habits that are good & done sometimes<br>
                    Habits that are good & done infrequently or never<br>
                    Habits that are bad & done consistently<br>
                    Habits that are bad & done sometimes<br>
                    Habits that are bad & done infrequently or never
                </p>

                <p>
                    Impact-Adjusted Percentages of Habit Types<br>
                    Habits that are good & high impact<br>
                    Habits that are good & medium impact<br>
                    Habits that are good & low impact<br>
                    Habits that are bad & high impact<br>
                    Habits that are bad & medium impact<br>
                    Habits that are bad & low impact<br>
                    <em>High Impact: 8 or higher, Medium Impact: between 4 and 7 (inclusive), Low Impact: less than 4</em>
                </p>

            </div>

        </div>
    );
}