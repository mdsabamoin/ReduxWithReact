
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { isLogOut } from '../Slices/AuthSlice';

const CustomNavbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(isLogOut());
  };

  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Navbar.Brand href="#home">User Profile</Navbar.Brand>
      <Nav className="ml-auto">
        <Button variant="outline-light" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
