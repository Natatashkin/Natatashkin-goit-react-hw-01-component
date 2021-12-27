import styled from '@emotion/styled';

const Stats = styled.ul`
  display: flex;
  margin: 15px 0;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgb(241, 241, 245);
  background-color: rgb(229, 229, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);

  color: grey;
  text-transform: capitalize;

  :not(:last-child) {
    border-right: 1px solid rgb(187, 187, 187);
  }
`;

export { Stats, Item };
