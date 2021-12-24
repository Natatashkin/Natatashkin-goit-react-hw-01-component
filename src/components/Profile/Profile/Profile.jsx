import React from 'react';
import PropTypes from 'prop-types';
import StatList from '../StatsList/StatsList';
import styles from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className={styles.thumb}>
          <img src={avatar} alt={username} className={styles.avatar} />
        </div>
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{`@${tag}`}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <StatList userStats={stats} />
    </div>
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
