import { useState } from 'react';
import { Container } from './Container';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackHandler = event => {
    const currentBtn = event.target.value;
    setState(prevState => {
      return { ...prevState, [currentBtn]: prevState[currentBtn] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = state;
    if (total) {
      const positiveFeedback = (good / total) * 100;
      return Math.round(positiveFeedback);
    }
    return 0;
  };

  const { good, neutral, bad } = state;
  const buttonTypes = Object.keys(state);
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonTypes}
          onLeaveFeedback={feedbackHandler}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};
