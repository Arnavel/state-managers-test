import { observable, makeObservable, action } from 'mobx';

/**
 * CounterStore, вариант без декораторов
 */
export class CounterStore {
  value: number = 0;
  
  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action,
      decrement: action
    });
  }

  async increment() {
    this.value += 1;
  }

  async decrement() {
    this.value -= 1;
  }
}
