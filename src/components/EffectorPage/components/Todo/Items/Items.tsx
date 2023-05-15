import React, { FC, ReactElement } from 'react';
import classes from './Items.module.scss';
import cx from 'classnames';
import { TItemsProps } from './Items.types';
import { useList } from 'effector-react';

export const Items: FC<TItemsProps> = ({
                                         list, 
                                         toggleItem,
                                         deleteItem
                                       }): ReactElement => {



  const todos = useList(list, (listItem) => (
    <li
      className={cx(classes.item, {
        [classes.checked]: listItem.completed
      })}
      key={listItem.id}
    >
        <span onClick={() => toggleItem(listItem.id)}>
           <input type="checkbox" checked={listItem.completed} onChange={() => {
           }}/>
          {listItem.title}
        </span>

      <span onClick={() => deleteItem(listItem.id)}>x</span>
    </li>
  ))
  
  return <ul className={classes.items}>
    {todos}
  </ul>
};

