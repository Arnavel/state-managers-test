import React from "react";
import { CounterStore } from "./mobx/CounterStore";
import { TodoStore } from "./mobx/TodoStore";

export const stores = {
  counterStore: new CounterStore(),
  todoStore: new TodoStore(),
};

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;