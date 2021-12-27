import React from 'react';
import PropTypes from 'prop-types';
import StatList from '../StatsList/StatsList';
import {
  ProfileBlock,
  Description,
  Thumb,
  Avatar,
  Name,
  Paragraph,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <ProfileBlock>
      <Description>
        <Thumb>
          <Avatar src={avatar} alt={username} />
        </Thumb>
        <Name>{username}</Name>
        <Paragraph>{`@${tag}`}</Paragraph>
        <Paragraph weight>{location}</Paragraph>
      </Description>
      <StatList userStats={stats} />
    </ProfileBlock>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
