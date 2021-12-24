import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

const FriendListItem = ({ userUvatar, username, userStatus }) => {
  return (
    <ListItem>
      <Status status={userStatus}></Status>
      <Avatar src={userUvatar} alt={username} width="48" />
      <Name>{username}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  userUvatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userStatus: PropTypes.bool.isRequired,
};

export default FriendListItem;
