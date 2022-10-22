import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greetings';

export default function Greetings() {
  const greetings = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>{greetings.greeting}</h1>
    </div>
  );
}
