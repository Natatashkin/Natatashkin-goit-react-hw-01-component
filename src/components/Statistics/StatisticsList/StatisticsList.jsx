import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';

const StatisticsList = ({ statsData }) => (
  <ul className={styles.statList}>
    {statsData.map(({ id, label, percentage }) => {
      return (
        <li
          className={styles.item}
          key={id}
          style={{ backgroundColor: getRundomColor() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage} %</span>
        </li>
      );
    })}
  </ul>
);

StatisticsList.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default StatisticsList;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRundomColor() {
  const color = `rgb(${getRndInteger(0, 255)}, ${getRndInteger(
    0,
    255,
  )}, ${getRndInteger(0, 255)})`;
  return color;
}
