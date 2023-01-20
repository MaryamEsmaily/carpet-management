import { useState } from "react";

/**
 ** custom hook for manage modals
 */
const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  //
  function toggle() {
    setIsShowing((prev) => !prev);
  }
  //
  const config = {
    isShowing,
    toggle,
  };
  //
  return {
    isShowing,
    toggle,
    config,
  };
};

export default useModal;
