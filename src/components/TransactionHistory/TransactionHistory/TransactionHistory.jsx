import React from 'react';
import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import {
  TransactionTable,
  TransactionName,
  TransactionRow,
  TransactonNameItem,
  TransactionsList,
} from '../TransactionHistory/TransactionHistory.styled';

const TransactionHistory = ({ data }) => {
  return (
    <TransactionTable>
      <TransactionName>
        <TransactionRow>
          <TransactonNameItem>Type</TransactonNameItem>
          <TransactonNameItem>Amount</TransactonNameItem>
          <TransactonNameItem>Currency</TransactonNameItem>
        </TransactionRow>
      </TransactionName>

      <TransactionsList>
        {data.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            TransactionType={type}
            TransactionAmount={amount}
            TransactionCurrency={currency}
          />
        ))}
      </TransactionsList>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
