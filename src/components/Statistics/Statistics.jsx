import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p>Good: {good}</p>
      </li>

      <li className={styles.item}>
        <p>Neutral: {neutral}</p>
      </li>

      <li className={styles.item}>
        <p>Bad: {bad}</p>
      </li>

      <li className={styles.item}>
        <p>Total: {total}</p>
      </li>

      <li className={styles.item}>
        <p>
          Positive feedback: <span>{positiveFeedback}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
