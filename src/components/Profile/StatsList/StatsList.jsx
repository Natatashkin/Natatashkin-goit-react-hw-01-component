import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem.jsx/ListItem';
import { Stats, Item } from './StatList.styled';

const StatList = ({ userStats }) => {
  const keys = Object.keys(userStats);
  return (
    <Stats>
      {keys.map(key => (
        <Item key={key}>
          <ListItem itemLabel={key} itemValue={userStats[key]} />
        </Item>
      ))}
    </Stats>
  );
};

StatList.propTypes = {
  userStats: PropTypes.object,
};
export default StatList;
