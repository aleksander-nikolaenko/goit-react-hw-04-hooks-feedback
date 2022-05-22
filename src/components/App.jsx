import React, { Component } from 'react';
import { Container } from './Container';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackHandler = event => {
    const currentBtn = event.target.value;
    this.setState(prevState => {
      return {
        [currentBtn]: prevState[currentBtn] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (total) {
      const positiveFeedback = (good / total) * 100;
      return Math.round(positiveFeedback);
    }
    return 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const buttonTypes = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonTypes}
            onLeaveFeedback={this.feedbackHandler}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}
