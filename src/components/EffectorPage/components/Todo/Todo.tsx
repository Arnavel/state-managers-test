import React, { FC, ReactElement } from 'react';
import { TTodoProps } from './Todo.types';
import { AddItem } from './AddItem';
import { Items } from './Items';
import { Statistics } from './Statistics';
import { ETodoStore } from '~/stores/effector/ETodoStore';
import { useStore } from 'effector-react';

export const Todo: FC<TTodoProps> =  (): ReactElement => {
  const store = ETodoStore();
  const statisticsText = useStore(store.$statistics);
  
  return <>
    <AddItem add={store.addItem}/>
    <Items list={store.$list} deleteItem={store.deleteItem} toggleItem={store.toggleItem}/>
    <Statistics text={statisticsText}/>
  </>;
};

