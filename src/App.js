import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/Feature/Counter/CounterSlice'
import { Button } from 'react-bootstrap';

const App = () => {
      const count = useSelector((state)=>state.counter.value)
     const dispatch = useDispatch();
  const IncreaseCounter = () => {
    dispatch(increment());
  };

  
  const DecreaseCounter = () => {
    dispatch(decrement());
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      
      <Button
        variant="primary"
        className="m-2"
        onClick={IncreaseCounter}
      >
        INCREMENTBY2
      </Button>
      <h1>{count}</h1>
      <Button
        variant="secondary"
        className="m-2"
        onClick={DecreaseCounter}
      >
        DECREMENTBY2
      </Button>
    </div>
  );
};

export default App;
