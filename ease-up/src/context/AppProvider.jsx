import { createContext, useReducer } from 'react';
import { appReducer, initialState } from './appReducer';

export const AppStateContext = createContext(null);
export const AppDispatchContext = createContext(null);

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}