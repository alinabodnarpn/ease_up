import { useContext } from 'react';
import { AppStateContext, AppDispatchContext } from '../context/AppProvider';

export function useAppState() {
  return useContext(AppStateContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}