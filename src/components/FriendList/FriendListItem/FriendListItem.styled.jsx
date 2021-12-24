import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: transform 250ms linear;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  :hover {
    transform: scale(1.1);
  }
`;

const Status = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 15px;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
  border-radius: 50%;
`;

const Avatar = styled.img`
  display: block;
  margin-right: 15px;
`;

const Name = styled.p`
  margin: 0;
  font-size: 24px;
`;

export { ListItem, Status, Avatar, Name };
