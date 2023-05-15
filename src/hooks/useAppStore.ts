import { useContext } from "react";
import { stores, storesContext } from "~/stores/index";

export const useAppStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => useContext(storesContext)[store];