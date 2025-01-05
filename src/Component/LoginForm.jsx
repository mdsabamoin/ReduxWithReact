

import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn, isLogOut } from '../Slices/AuthSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const Authentication = useSelector((state)=>state.auth.isAuthenticated)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(isLoggedIn());
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5" style={{ height: '100vh' }}>
      { !Authentication && <Card style={{ width: '35%', height: '50%' }} className="p-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <h2 className="text-center">Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>}
    </Container>
  );
};

export default LoginForm;
