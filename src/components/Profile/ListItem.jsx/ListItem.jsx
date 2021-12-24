import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';

const ListItem = ({ itemLabel, itemValue }) => {
  return (
    <>
      <span className={styles.label}>{itemLabel}</span>
      <span className={styles.quantity}>{itemValue}</span>
    </>
  );
};

ListItem.prototype = {
  itemLabel: PropTypes.string.isRequired,
  itemValue: PropTypes.number,
};

export default ListItem;
