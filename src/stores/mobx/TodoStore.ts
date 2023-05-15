import { observable, makeObservable, computed, action } from 'mobx';
import { nanoid } from 'nanoid';

export type TodoListItem = {
  id: string;
  title: string,
  completed: boolean
};

/**
 * TodoStore, вариант с декораторами
 */
export class TodoStore {
  @observable list: TodoListItem[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  addItem(title: string) {
     this.list.push({
      id: nanoid(),
      title,
      completed: false
    });
  }

  @action
  deleteItem(id: string){
    this.list.splice(this.list.findIndex( (item) => item.id === id), 1);
  }

  @action
  toggleItem(item: TodoListItem){ 
    item.completed = !item.completed;
  }
  
  @computed
  get statistics() {
    const completed = this.list.filter((item) => item.completed);
    return `${completed.length}/${this.list.length}`;
  }
}
