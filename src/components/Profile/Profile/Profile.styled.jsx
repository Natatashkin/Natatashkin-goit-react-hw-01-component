import styled from '@emotion/styled';

const ProfileBlock = styled.div`
  max-width: 300px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 15px;
`;

const Paragraph = styled.p(props => ({
  color: 'grey',
  marginTop: 0,
  marginBottom: '7px',
  fontWeight: props.weight && 700,
}));

export { ProfileBlock, Description, Thumb, Avatar, Name, Paragraph };
