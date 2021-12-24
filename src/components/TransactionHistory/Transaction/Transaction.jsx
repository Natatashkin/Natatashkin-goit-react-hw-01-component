import React from 'react';
// import PropTypes from 'prop-types';
import { TransactionRow } from '../TransactionHistory/TransactionHistory.styled';
import { TransactionData } from './Тransaction.styled';

const Transaction = ({
  TransactionType,
  TransactionAmount,
  TransactionCurrency,
}) => {
  return (
    <TransactionRow>
      <TransactionData>{TransactionType}</TransactionData>
      <TransactionData>{TransactionAmount}</TransactionData>
      <TransactionData>{TransactionCurrency}</TransactionData>
    </TransactionRow>
  );
};

export default Transaction;
