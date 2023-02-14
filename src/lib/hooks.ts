import React, { useState, useEffect, useContext, Context } from 'react';
import { getStateFromLocalStorgage } from './helpers';

export const useLocalStorage = (
  defaultValue: string | number | {} | [] | null,
  key: string
): [any, React.SetStateAction<any>] => {
  const initialValue = getStateFromLocalStorgage(defaultValue, key);
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const useConextIfPopulated = (contextName: Context<any>) => {
  const context = useContext(contextName);
  if (context === undefined) {
    throw new Error(`${contextName} is empty.`);
  }
  return context;
};
