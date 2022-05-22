import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
import { Button } from './Button';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={styles.list}>
        {options.map(buttonType => {
          return (
            <li key={buttonType} className={styles.item}>
              <Button onClick={onLeaveFeedback} value={buttonType}>
                {buttonType}
              </Button>
            </li>
          );
        })}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
