import React, { FC, ReactElement, useRef } from 'react';
import { TAddItemProps } from './AddItem.types';
import { nanoid } from 'nanoid';

export const AddItem: FC<TAddItemProps> = ({add}): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addToStore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef?.current?.value;
    if (value){
      add({
        id: nanoid(),
        title: value,
        completed: false
      });
      inputRef.current.value = '';
    }
  };
  
  return <form onSubmit={(e) => addToStore(e)}>
    <input type="text" ref={inputRef}/>
    <button type={"submit"} >Add</button>
  </form>;
};

