import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem.jsx/ListItem';
import styles from './StatList.module.css';

const StatList = ({ userStats }) => {
  const keys = Object.keys(userStats);
  return (
    <ul className={styles.stats}>
      {keys.map(key => (
        <li key={key} className={styles.item}>
          <ListItem itemLabel={key} itemValue={userStats[key]} />
        </li>
      ))}
    </ul>
  );
};

StatList.propTypes = {
  userStats: PropTypes.object,
};
export default StatList;
