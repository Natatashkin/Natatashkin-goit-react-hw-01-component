import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsList from '../StatisticsList/StatisticsList';

const Statistics = ({ title, stats }) => {
  return (
    <div className={styles.statistics}>
      {title ? <h3 className={styles.title}>Upload stats</h3> : null}
      <StatisticsList statsData={stats} />
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
