
import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';

const ProfilePage = () => {
  return (
    <>
      <CustomNavbar />
      <Container className="d-flex flex-column align-items-center mt-5">
        <h1>Welcome to Your Profile</h1>
        <p>This is the user's profile page.</p>
      </Container>
    </>
  );
};

export default ProfilePage;
