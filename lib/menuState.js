import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MenuStateProvider({ children }) {
  // to store data(state) and functionality
  const [menuOpen, setMenuOpen] = useState(true);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function openMenu() {
    setMenuOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ menuOpen, setMenuOpen, toggleMenu, closeMenu, openMenu }}
    >
      {' '}
      {children}{' '}
    </LocalStateProvider>
  );
}

function useMenu() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

export { MenuStateProvider, useMenu };
