import React from "react";
import styled from "styled-components";
const UserWrapper = styled.div`
  width: 400px;
  height: 500px;
  border: 5px solid black;
`;
const UserId = styled.p`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
`;
const UserPhoto = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid black;
  display: flex;
  margin: 100px;
`;
const Fetch = ({ user }) => {
  return (
    <UserWrapper>
      <p>{user.title}</p>
      <UserId>{user.id}</UserId>
      <p>Lorem ipsum</p>
      <UserPhoto src={user.url} alt='photo' />
    </UserWrapper>
  );
};

export default Fetch;
