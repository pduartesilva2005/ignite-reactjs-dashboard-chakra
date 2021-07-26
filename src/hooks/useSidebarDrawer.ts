import { useContext } from 'react';
import { SidebarDrawerContext } from '../contexts/SidebarDrawerContext';

export function useSidebarDrawer() {
  return useContext(SidebarDrawerContext);
}
