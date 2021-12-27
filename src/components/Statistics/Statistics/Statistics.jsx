import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsBlock, Title } from './Statistics.styled';
import StatisticsList from '../StatisticsList/StatisticsList';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBlock>
      {title ? <Title>Upload stats</Title> : null}
      <StatisticsList statsData={stats} />
    </StatisticsBlock>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
