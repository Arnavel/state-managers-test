import React, { FC, ReactElement, useRef } from 'react';
import { useAppStore } from '~/hooks/useAppStore';
import { TAddItemProps } from './AddItem.types';

export const AddItem: FC<TAddItemProps> = (props: TAddItemProps): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const store  = useAppStore('todoStore');

  const addToStore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef?.current?.value;
    if (value){
      store.addItem(value);
      inputRef.current.value = '';
    }
  };
  
  return <form onSubmit={(e) => addToStore(e)}>
    <input type="text" ref={inputRef}/>
    <button type={"submit"} >Add</button>
  </form>;
};

