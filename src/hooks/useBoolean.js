import { useState } from "react";

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(!value);

  return { setTrue, setFalse, toggle, setValue, value };
};

export default useBoolean;
