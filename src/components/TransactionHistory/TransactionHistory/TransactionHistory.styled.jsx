import styled from '@emotion/styled';

const TransactionTable = styled.table`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px;
  width: 80%;
  min-width: 350px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const TransactionRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40px;

  :last-of-type {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  :nth-of-type(even) {
    background-color: #e3e3e3;
  }
`;

const TransactionName = styled.thead`
  background-color: #0073ff;
  color: whitesmoke;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

const TransactonNameItem = styled.th`
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  border-color: grey;

  :not(:last-of-type) {
    border-right: 1px solid white;
  }
`;

const TransactionsList = styled.tbody`
  display: grid;
  grid-auto-rows: auto;
  background-color: whitesmoke;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export {
  TransactionTable,
  TransactionName,
  TransactionRow,
  TransactonNameItem,
  TransactionsList,
};
