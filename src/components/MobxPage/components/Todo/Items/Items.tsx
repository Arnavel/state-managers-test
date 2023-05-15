import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import classes from './Items.module.scss';
import cx from 'classnames';
import { useAppStore } from '~/hooks/useAppStore';
import { TodoListItem } from '~/stores/mobx/TodoStore';

const ItemsComponent = (): ReactElement => {
  const store = useAppStore('todoStore');

  return <ul className={classes.items}>
    {store.list.map((listItem: TodoListItem) =>
      <li
        className={cx(classes.item, {
          [classes.checked]: listItem.completed
        })}
        key={listItem.id}
      >
        <span onClick={() => store.toggleItem(listItem)}>
           <input type="checkbox" checked={listItem.completed} onChange={() => {}}/>
          {listItem.title}
        </span>

        <span onClick={() => store.deleteItem(listItem.id)}>x</span>
      </li>
    )}
  </ul>;
};

export const Items =  observer(ItemsComponent);