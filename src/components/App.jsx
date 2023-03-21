import React, { Component } from "react";
import { Statistics } from "./statistics/Statistics";
import { Section } from "./section/Section";
import { FeedbackOptions } from "./statistics/feedbackOptions/FeedbackOptions";

class App extends Component {
state = {
        good: 0,
        neutral: 0,
        bad: 0
  };
  
  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
  return (
     <>
      <Section title="Please leave feedback">
        <FeedbackOptions
        options={Object.keys(this.state)}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
      </Section>
      {this.countTotalFeedback() > 0 ? <Section title="Statistics">
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section> : null}
      
    </>
  );
}
  
};

export default App;