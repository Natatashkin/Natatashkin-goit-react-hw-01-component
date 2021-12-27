import React from 'react';
import PropTypes from 'prop-types';
import { Label, Quantity } from './ListItem.styled';

const ListItem = ({ itemLabel, itemValue }) => {
  return (
    <>
      <Label>{itemLabel}</Label>
      <Quantity>{itemValue}</Quantity>
    </>
  );
};

ListItem.prototype = {
  itemLabel: PropTypes.string.isRequired,
  itemValue: PropTypes.number,
};

export default ListItem;
