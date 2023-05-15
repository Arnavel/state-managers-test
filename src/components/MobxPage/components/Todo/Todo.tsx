import React, { FC, ReactElement } from 'react';
import { TTodoProps } from './Todo.types';
import { AddItem } from './AddItem';
import { Items } from './Items';
import { Statistics } from './Statistics';

export const Todo: FC<TTodoProps> =  (props: TTodoProps): ReactElement => {
  return <>
    <AddItem/>
    <Items/>
    <Statistics/>
  </>;
};

