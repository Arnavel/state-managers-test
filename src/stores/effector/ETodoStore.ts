import { createEvent, createStore, Store, Event, combine } from 'effector';
import { useStore } from 'effector-react';
export type TodoListItem = {
  id: string;
  title: string,
  completed: boolean
};

export type AddItemType = Event<TodoListItem>;
export type DeleteItemType = Event<string>;
export type EventItemType = Event<string>;
export type StoreItemsType = Store<TodoListItem[]>;

export const ETodoStore = () => {
  const addItem: Event<TodoListItem> = createEvent();
  const deleteItem: Event<string> = createEvent();
  const toggleItem: Event<string> = createEvent();

  const $list = createStore<TodoListItem[]>([])
    .on(addItem, (todos, newTodo: TodoListItem) => [...todos, newTodo])
    .on(toggleItem, (state, id: string) => state.map((item) => ({
      ...item,
      completed: id === item.id ? !item.completed : item.completed,
    })))
    .on(deleteItem, (state, id: string) => state.filter((item) => item.id !== id));

  const $statistics = $list.map((stores) => {
    console.log(stores);
    const countCompleted = stores.filter((item) => item.completed);
    return `${countCompleted.length}/${stores.length}`
  });

  return {
    $list, addItem, deleteItem, toggleItem, $statistics
  };
};

