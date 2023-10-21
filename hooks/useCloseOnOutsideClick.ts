import { useEffect, RefObject } from "react";

export function useCloseOnOutsideClick(
  selectRef: RefObject<HTMLElement>,
  isOpen: boolean,
  onClose: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef, isOpen, onClose]);
}
