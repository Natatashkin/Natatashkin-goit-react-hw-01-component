import styled from '@emotion/styled';

const TransactionData = styled.td`
  display: grid;
  text-align: center;
  align-content: center;

  :not(:last-of-type) {
    border-right: 1px solid white;
  }

  :nth-of-type(even) {
    padding-right: 40%;
    text-align: end;
  }

  :first-of-type {
    padding-left: 40%;
    text-align: start;
  }
`;

export { TransactionData };
