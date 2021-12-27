import styled from '@emotion/styled';

const StatList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;

  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 15px;
  color: white;

  :first-of-type {
    border-bottom-left-radius: 10px;
  }

  :last-of-type {
    border-bottom-right-radius: 10px;
  }
`;

const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Percentage = styled.span`
  font-weight: 700;
`;

export { StatList, Item, Label, Percentage };
