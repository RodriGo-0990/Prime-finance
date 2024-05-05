import { createContext, useState } from 'react';

export const MenuContext = createContext();

function MenuProvider ({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const setMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider value={{ isOpen, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
export default MenuProvider;