import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/Feature/Counter/CounterSlice'
import { Button } from 'react-bootstrap';
import LoginForm from './Component/LoginForm';
import ProfilePage from "./Component/ProfilePage";
const App = () => {
     
     const Authentication = useSelector((state)=>state.auth.isAuthenticated);
  

  
  

  return (
    <>
    {!Authentication && <LoginForm/>}
    {Authentication && <ProfilePage/>}
    
   
    </>
  );
};

export default App;
