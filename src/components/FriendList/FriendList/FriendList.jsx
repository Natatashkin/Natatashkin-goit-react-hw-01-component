import React from 'react';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friendsData }) => (
  <List>
    {friendsData.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        userUvatar={avatar}
        username={name}
        userStatus={isOnline}
      />
    ))}
  </List>
);

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
