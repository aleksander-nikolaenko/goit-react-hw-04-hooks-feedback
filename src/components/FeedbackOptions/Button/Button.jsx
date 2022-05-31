import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';

export const Button = props => {
  const {
    onClick,
    children,
    className,
    value = 'neutral',
    ...restProps
  } = props;

  const classList = cx(styles.button, className, {
    [styles.buttonGood]: value === 'good',
    [styles.buttonNeutral]: value === 'neutral',
    [styles.buttonBad]: value === 'bad',
  });

  return (
    <button
      {...restProps}
      value={value}
      className={classList}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.oneOf(['good', 'neutral', 'bad']),
};
