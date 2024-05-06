import { useState } from "react";

export function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return { isOpen, toogleIsOpen };
}
