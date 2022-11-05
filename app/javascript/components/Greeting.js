import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../Store/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state) => state.greetings);

  const randomGreetings = () => {
    dispatch(fetchGreetings());
  };

  useEffect(() => {
    randomGreetings();
  });

  return (
    <div>
      <p>
        Greeting:
        {greetings?.greeting}
      </p>
      <button type="button" onClick={() => randomGreetings()}>Generate new message</button>
    </div>
  );
};

export default Greeting;
