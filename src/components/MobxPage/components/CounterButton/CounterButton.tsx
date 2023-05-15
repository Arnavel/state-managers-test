import React from 'react';
import { TCounterButtonProps } from './CounterButton.types';
import { observer } from 'mobx-react-lite';
import { useAppStore } from '~/hooks/useAppStore';

const CounterButtonWithStore = ({test}: TCounterButtonProps) => {
  const counterStore = useAppStore('counterStore');

  return (
    <div>
      <h1>Counter app</h1>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <h2>Value {counterStore.value}</h2>
    </div>
  );
};

export const CounterButton = observer(CounterButtonWithStore);
