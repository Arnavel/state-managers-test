import React from 'react';
import { TCounterButtonProps } from './CounterButton.types';
import {createEvent, createStore} from 'effector'
import {useStore} from 'effector-react'

const increment = createEvent();
const decrement = createEvent();

const $counter = createStore(1)
  .on(increment, n => n + 1)
  .on(decrement, n => n -1);
const $counterText = $counter.map(n => `current value = ${n}`);

export const CounterButton = ({test}: TCounterButtonProps) => {
  const counter = useStore($counter);
  const counterText = useStore($counterText);
  return (
    <div>
      <h1>CounterButton</h1>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => increment()}>Increment</button>
      <h2>Value {counter}</h2>
      <h2>counterText {counterText}</h2>
    </div>
  );
};

